# Chat Example

This example demonstrates how to build a simple interactive chat application using the Vellum Node SDK. It shows how to execute workflow deployments with streaming responses and maintain conversation state across multiple turns using the `previousExecutionId` parameter.

## Prerequisites

1. A Vellum account with an API key
2. A deployed Agent in Vellum that has a Chat Message Trigger configured

## Setup

1. Install dependencies:

```bash
npm install
```

2. Set your Vellum API key as an environment variable:

```bash
export VELLUM_API_KEY=your-api-key-here
```

## Running the Example

```bash
npx ts-node chat-api.ts
```

Or if you prefer to compile first:

```bash
npx tsc chat-api.ts
node chat-api.js
```

## How It Works

The example creates an interactive chat loop that:

1. Prompts the user for input
2. Sends the message to a deployed Vellum workflow using `workflowDeployments.executeStream`
3. Streams the response back to the console in real-time
4. Captures the execution ID from the fulfilled event
5. Uses the previous execution ID to resume the conversation on subsequent turns
6. Repeats until the user types "quit" or "exit"

This pattern mirrors the Python SDK's chatbot example, which uses `previous_execution_id` to maintain conversation state across executions.

## Configuration

Update the `WORKFLOW_DEPLOYMENT_NAME` constant in `chat-api.ts` to match your deployed workflow's name.

## Web Frontend

For a browser-based chat interface, see the [frontend](./frontend) directory which provides a simple Next.js application with streaming support.
