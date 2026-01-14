import * as readline from "readline";

import { ChatMessageRequest, VellumClient } from "vellum-ai";

// Configuration - update this to match your deployed prompt's name
const PROMPT_DEPLOYMENT_NAME = "your-prompt-deployment-name";

// Initialize the Vellum client
// The API key is read from the VELLUM_API_KEY environment variable by default
const client = new VellumClient({
    apiKey: process.env.VELLUM_API_KEY || "",
});

// Store chat history across turns
const chatHistory: ChatMessageRequest[] = [];

async function chat(userMessage: string): Promise<string> {
    // Add the user message to chat history
    chatHistory.push({
        role: "USER",
        text: userMessage,
    });

    // Execute the prompt with streaming
    const response = await client.executePromptStream({
        promptDeploymentName: PROMPT_DEPLOYMENT_NAME,
        releaseTag: "LATEST",
        inputs: [
            {
                type: "CHAT_HISTORY",
                name: "chat_history",
                value: chatHistory,
            },
        ],
    });

    let fullResponse = "";

    // Process the stream
    for await (const event of response) {
        if (event.state === "STREAMING") {
            // Handle streaming chunks
            const output = event.output;
            if (output?.type === "STRING" && output.value) {
                process.stdout.write(output.value);
                fullResponse += output.value;
            }
        } else if (event.state === "FULFILLED") {
            // Handle the final fulfilled event
            const outputs = event.outputs;
            if (outputs && outputs.length > 0) {
                const output = outputs[0];
                if (output?.type === "STRING" && output.value) {
                    // If we haven't streamed anything yet, print the full response
                    if (!fullResponse) {
                        fullResponse = output.value;
                        process.stdout.write(fullResponse);
                    }
                }
            }
        } else if (event.state === "REJECTED") {
            const errorMessage = event.error?.message || "Unknown error";
            throw new Error(`Prompt execution failed: ${errorMessage}`);
        }
    }

    console.log(); // New line after streaming completes

    // Add the assistant response to chat history
    chatHistory.push({
        role: "ASSISTANT",
        text: fullResponse,
    });

    return fullResponse;
}

async function main(): Promise<void> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log("Chat Example - Using Vellum Node SDK");
    console.log('Type "quit" or "exit" to end the conversation.\n');

    const askQuestion = (): void => {
        rl.question("You: ", async (userMessage) => {
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
                process.stdout.write("Assistant: ");
                await chat(trimmedMessage);
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
