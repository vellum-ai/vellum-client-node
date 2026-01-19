# Chat Frontend

A simple Next.js frontend for the Vellum chat example that allows submitting messages and streaming responses.

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

## Running the Frontend

Development mode:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

Production build:

```bash
npm run build
npm start
```

## How It Works

The frontend provides a simple chat interface that:

1. Displays a message input form at the bottom of the screen
2. Sends messages to the `/api/chat` endpoint when submitted
3. Streams the response back in real-time using Server-Sent Events
4. Maintains conversation state using the `previousExecutionId` from each response
5. Shows a visual distinction between user messages (blue) and assistant messages (gray)

## Configuration

The workflow deployment name can be configured via the `WORKFLOW_DEPLOYMENT_NAME` environment variable. If not set, it defaults to "basic-chatbot".
