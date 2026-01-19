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

2. Set your environment variables:

```bash
export VELLUM_API_KEY=your-api-key-here
export WORKFLOW_DEPLOYMENT_NAME=basic-chatbot  # Optional, defaults to "basic-chatbot"
```

## Running the CLI Example

```bash
npm run api
```

Or using the fetch-based implementation:

```bash
npm run fetch
```

## Running the Web Frontend

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

For production:

```bash
npm run build
npm start
```

## How It Works

Both the CLI and web frontend create an interactive chat that:

1. Accepts user input (via terminal or browser)
2. Sends the message to a deployed Vellum workflow using `workflowDeployments.executeStream`
3. Streams the response back in real-time
4. Captures the execution ID from the fulfilled event
5. Uses the previous execution ID to resume the conversation on subsequent turns

This pattern mirrors the Python SDK's chatbot example, which uses `previous_execution_id` to maintain conversation state across executions.

## Configuration

The workflow deployment name can be configured via the `WORKFLOW_DEPLOYMENT_NAME` environment variable. If not set, it defaults to "basic-chatbot". You can also update the constant directly in `chat-api.ts` or `chat-fetch.ts`.
