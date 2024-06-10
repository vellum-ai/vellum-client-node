# Vellum Node Library

[![npm shield](https://img.shields.io/npm/v/vellum-ai)](https://www.npmjs.com/package/vellum-ai)
![license badge](https://img.shields.io/github/license/vellum-ai/vellum-client-node)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://buildwithfern.com/?utm_source=vellum-ai/vellum-client-node/readme)

The Vellum Node SDK provides access to the Vellum API from JavaScript/TypeScript in node environments.

Note: This SDK is not intended to work in client-side JavaScript environments (i.e. web browsers).

## API Docs
You can find Vellum's complete API docs at [docs.vellum.ai](https://docs.vellum.ai/api-reference/introduction/getting-started).


## Installation

```
npm install --save vellum-ai
# or
yarn add vellum-ai
```

## Usage

```typescript
import { VellumClient } from 'vellum-ai';

const vellum = new VellumClient({
  apiKey: "<YOUR_API_KEY>",
});

void main();

async function main() {
    const result = await vellum.executePrompt({
        promptDeploymentName: "<your-deployment-name>>",
        releaseTag: "LATEST",
        inputs: [
            {
                type: "STRING",
                name: "<input_name>",
                value: "<example-string-value>",
            },
        ],
    });

    if (result.state === "REJECTED") {
        throw new Error(result.error.message)
    } else if (result.state === "FULFILLED") {
        console.log(result.outputs[0].value);
    }
}
```

> [!TIP]
> You can set a system environment variable `VELLUM_API_KEY` to avoid writing your api key within your code. To do so, add `export VELLUM_API_KEY=<your-api-token>`
> to your ~/.zshrc or ~/.bashrc, open a new terminal, and then any code calling `VellumClient()` will read this key.

## Contributing

While we value open-source contributions to this SDK, most of this library is generated programmatically.

Please feel free to make contributions to any of the directories or files below:
```plaintext
tests/*
README.md
```

Any additions made to files beyond those directories and files above would have to be moved over to our generation code
(found in the separate [vellum-client-generator](https://github.com/vellum-ai/vellum-client-generator) repo),
otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept,
but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!
