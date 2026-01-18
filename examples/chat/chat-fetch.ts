import * as readline from "readline";

import dotenv from "dotenv";
dotenv.config();

// Configuration - update this to match your deployed workflow's name
// Find this one at https://app.vellum.ai/public/workflow-deployments/44f311f0-3951-4088-bbc7-6707ee41672c?releaseTag=LATEST&condensedNodeView=1&showOpenInVellum=1
const WORKFLOW_DEPLOYMENT_NAME = "basic-chatbot";

// Vellum API configuration
const VELLUM_API_KEY = process.env.VELLUM_API_KEY || "";
const VELLUM_PREDICT_URL = "https://predict.vellum.ai";

interface WorkflowStreamingEvent {
    name: "workflow.execution.streaming";
    body: {
        output: {
            delta?: string;
        };
    };
}

interface WorkflowFulfilledEvent {
    name: "workflow.execution.fulfilled";
    spanId: string;
}

interface WorkflowRejectedEvent {
    name: "workflow.execution.rejected";
    body: {
        error: {
            message: string;
        };
    };
}

type WorkflowEvent = WorkflowStreamingEvent | WorkflowFulfilledEvent | WorkflowRejectedEvent;

async function* parseSSEStream(response: Response): AsyncGenerator<WorkflowEvent> {
    const reader = response.body?.getReader();
    if (!reader) {
        throw new Error("Response body is not readable");
    }

    const decoder = new TextDecoder();
    let buffer = "";

    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });

            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
                const trimmedLine = line.trim();
                if (!trimmedLine) continue;

                try {
                    const event = JSON.parse(trimmedLine) as WorkflowEvent;
                    yield event;
                } catch {
                    // Skip non-JSON lines (e.g., SSE comments or empty lines)
                }
            }
        }

        // Process any remaining data in the buffer
        if (buffer.trim()) {
            try {
                const event = JSON.parse(buffer.trim()) as WorkflowEvent;
                yield event;
            } catch {
                // Skip non-JSON data
            }
        }
    } finally {
        reader.releaseLock();
    }
}

async function chat(userMessage: string, previousExecutionId?: string): Promise<string | undefined> {
    const url = `${VELLUM_PREDICT_URL}/v1/workflow-deployments/${encodeURIComponent(WORKFLOW_DEPLOYMENT_NAME)}/execute-stream`;

    const requestBody: Record<string, unknown> = {
        inputs: {
            message: userMessage,
        },
        trigger: "chat",
    };

    if (previousExecutionId) {
        requestBody.previousExecutionId = previousExecutionId;
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": VELLUM_API_KEY,
        },
        body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API request failed with status ${response.status}: ${errorText}`);
    }

    // Process the SSE stream
    for await (const event of parseSSEStream(response)) {
        if (event.name === "workflow.execution.streaming") {
            // Handle streaming chunks - output the streaming content
            const output = event.body.output;
            if (typeof output.delta === "string") {
                process.stdout.write(output.delta);
            }
        } else if (event.name === "workflow.execution.fulfilled") {
            // Handle the final fulfilled event
            process.stdout.write("\n");
            return event.spanId;
        } else if (event.name === "workflow.execution.rejected") {
            throw new Error(`Workflow execution failed: ${event.body.error.message}`);
        }
    }

    throw new Error("Workflow execution ended without a valid fulfilled event");
}

async function main(): Promise<void> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let previousExecutionId: string | undefined = undefined;
    let iterations = 1;

    console.log("Chat Example - Using Node.js Fetch (Direct API Call)");
    console.log('Type "quit" or "exit" to end the conversation.\n');

    const askQuestion = (): void => {
        console.log("--- New Message ---");
        rl.question(`Your message (${iterations}): `, async (userMessage) => {
            const trimmedMessage = userMessage.trim();

            if (trimmedMessage.toLowerCase() === "quit" || trimmedMessage.toLowerCase() === "exit") {
                console.log("Goodbye!");
                rl.close();
                return;
            }

            if (!trimmedMessage) {
                console.log("Please type a message!");
                askQuestion();
                return;
            }

            try {
                const currentExecutionId = await chat(trimmedMessage, previousExecutionId);

                previousExecutionId = currentExecutionId;
                iterations++;
            } catch (error) {
                if (error instanceof Error) {
                    console.error(`Error: ${error.message}`);
                } else {
                    console.error("An unknown error occurred");
                }
            }

            console.log(); // Add spacing between turns
            askQuestion();
        });
    };

    askQuestion();
}

main().catch(console.error);
