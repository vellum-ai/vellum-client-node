# Chat Example

This example demonstrates how to build a simple interactive chat application using the Vellum Node SDK. It shows how to execute prompts with streaming responses and maintain chat history across multiple turns.

## Prerequisites

1. A Vellum account with an API key
2. A deployed prompt in Vellum that accepts a `chat_history` input variable of type `CHAT_HISTORY`

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
npx ts-node chat.ts
```

Or if you prefer to compile first:

```bash
npx tsc chat.ts
node chat.js
```

## How It Works

The example creates an interactive chat loop that:

1. Prompts the user for input
2. Sends the message along with the chat history to a deployed Vellum prompt
3. Streams the response back to the console in real-time
4. Appends both the user message and assistant response to the chat history
5. Repeats until the user types "quit" or "exit"

## Configuration

Update the `PROMPT_DEPLOYMENT_NAME` constant in `chat.ts` to match your deployed prompt's name.
