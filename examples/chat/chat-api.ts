import * as readline from "readline";

import { VellumClient } from "vellum-ai";
import dotenv from "dotenv";
dotenv.config();

// Configuration - update this to match your deployed workflow's name
// Find this one at https://app.vellum.ai/public/workflow-deployments/44f311f0-3951-4088-bbc7-6707ee41672c?releaseTag=LATEST&condensedNodeView=1&showOpenInVellum=1
const WORKFLOW_DEPLOYMENT_NAME = "basic-chatbot";

// Initialize the Vellum client
// The API key is read from the VELLUM_API_KEY environment variable by default
const client = new VellumClient({
    apiKey: process.env.VELLUM_API_KEY || "",
});

async function chat(userMessage: string, previousExecutionId?: string): Promise<string | undefined> {
    // Execute the workflow with streaming
    const response = await client.workflowDeployments.executeStream(WORKFLOW_DEPLOYMENT_NAME, {
        inputs: {
            message: userMessage,
        },
        previousExecutionId,
        trigger: "chat",
    });

    // Process the stream
    for await (const event of response) {
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
