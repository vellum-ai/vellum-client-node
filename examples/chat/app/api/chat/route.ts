import { VellumClient } from "vellum-ai";

const WORKFLOW_DEPLOYMENT_NAME = process.env.WORKFLOW_DEPLOYMENT_NAME || "basic-chatbot";

const client = new VellumClient({
    apiKey: process.env.VELLUM_API_KEY || "",
});

interface ChatRequest {
    message: string;
    previousExecutionId?: string;
}

export async function POST(request: Request): Promise<Response> {
    try {
        const body = (await request.json()) as ChatRequest;
        const { message, previousExecutionId } = body;

        if (!message || typeof message !== "string") {
            return new Response(JSON.stringify({ type: "error", message: "Message is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const stream = await client.workflowDeployments.executeStream(WORKFLOW_DEPLOYMENT_NAME, {
            inputs: { message },
            previousExecutionId,
            trigger: "chat",
        });

        const encoder = new TextEncoder();
        const readable = new ReadableStream({
            async start(controller) {
                try {
                    for await (const event of stream) {
                        if (event.name === "workflow.execution.streaming") {
                            const output = event.body.output;
                            if (typeof output.delta === "string") {
                                const data = JSON.stringify({
                                    type: "delta",
                                    content: output.delta,
                                });
                                controller.enqueue(encoder.encode(data + "\n"));
                            }
                        } else if (event.name === "workflow.execution.fulfilled") {
                            const data = JSON.stringify({
                                type: "done",
                                executionId: event.spanId,
                            });
                            controller.enqueue(encoder.encode(data + "\n"));
                        } else if (event.name === "workflow.execution.rejected") {
                            const data = JSON.stringify({
                                type: "error",
                                message: event.body.error.message,
                            });
                            controller.enqueue(encoder.encode(data + "\n"));
                        }
                    }
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : "Unknown error";
                    const data = JSON.stringify({
                        type: "error",
                        message: errorMessage,
                    });
                    controller.enqueue(encoder.encode(data + "\n"));
                } finally {
                    controller.close();
                }
            },
        });

        return new Response(readable, {
            headers: {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                Connection: "keep-alive",
            },
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return new Response(JSON.stringify({ type: "error", message: errorMessage }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
