import * as readline from "readline";

import { VellumClient } from "vellum-ai";

// Configuration - update this to match your deployed workflow's name
const WORKFLOW_DEPLOYMENT_NAME = "your-workflow-deployment-name";

// Initialize the Vellum client
// The API key is read from the VELLUM_API_KEY environment variable by default
const client = new VellumClient({
    apiKey: process.env.VELLUM_API_KEY || "",
});

async function chat(userMessage: string, previousExecutionId: string | null): Promise<string | null> {
    // Execute the workflow with streaming
    const response = await client.workflowDeployments.executeStream(WORKFLOW_DEPLOYMENT_NAME, {
        releaseTag: "LATEST",
        inputs: [
            {
                type: "STRING",
                name: "user_message",
                value: userMessage,
            },
        ],
        previousExternalId: previousExecutionId ?? undefined,
    });

    let currentExecutionId: string | null = null;

    // Process the stream
    for await (const event of response) {
        if (event.name === "workflow.execution.streaming") {
            // Handle streaming chunks - output the streaming content
            const output = event.body.output;
            if (output.type === "STRING" && output.value) {
                process.stdout.write(output.value);
            }
        } else if (event.name === "workflow.execution.fulfilled") {
            // Handle the final fulfilled event
            console.log("\nworkflow.execution.fulfilled", event.body.outputs);
            currentExecutionId = event.spanId;
        } else if (event.name === "workflow.execution.rejected") {
            throw new Error("Workflow execution failed");
        }
    }

    return currentExecutionId;
}

async function main(): Promise<void> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let previousExecutionId: string | null = null;
    let iterations = 1;

    console.log("Chat Example - Using Vellum Node SDK (Workflow Deployment API)");
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
                if (previousExecutionId) {
                    console.log(`Resuming from previous execution ID: ${previousExecutionId}`);
                } else {
                    console.log("Starting new conversation");
                }

                const currentExecutionId = await chat(trimmedMessage, previousExecutionId);

                console.log(`Current Execution ID: ${currentExecutionId}`);
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
