/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import * as Vellum from "./api/index";
import * as serializers from "./serialization/index";
import urlJoin from "url-join";
import * as errors from "./errors/index";
import * as stream from "stream";
import { AdHoc } from "./api/resources/adHoc/client/Client";
import { ContainerImages } from "./api/resources/containerImages/client/Client";
import { Deployments } from "./api/resources/deployments/client/Client";
import { DocumentIndexes } from "./api/resources/documentIndexes/client/Client";
import { Documents } from "./api/resources/documents/client/Client";
import { FolderEntities } from "./api/resources/folderEntities/client/Client";
import { MetricDefinitions } from "./api/resources/metricDefinitions/client/Client";
import { MlModels } from "./api/resources/mlModels/client/Client";
import { Sandboxes } from "./api/resources/sandboxes/client/Client";
import { TestSuiteRuns } from "./api/resources/testSuiteRuns/client/Client";
import { TestSuites } from "./api/resources/testSuites/client/Client";
import { WorkflowDeployments } from "./api/resources/workflowDeployments/client/Client";
import { WorkflowSandboxes } from "./api/resources/workflowSandboxes/client/Client";
import { Workflows } from "./api/resources/workflows/client/Client";
import { WorkspaceSecrets } from "./api/resources/workspaceSecrets/client/Client";

export declare namespace VellumClient {
    interface Options {
        environment?: core.Supplier<environments.VellumEnvironment | environments.VellumEnvironmentUrls>;
        apiKey?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class VellumClient {
    constructor(protected readonly _options: VellumClient.Options = {}) {}

    /**
     * An internal-only endpoint that's subject to breaking changes without notice. Not intended for public use.
     *
     * @param {Vellum.CodeExecutor} request
     * @param {VellumClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vellum.BadRequestError}
     *
     * @example
     *     await client.executeCode({
     *         code: "code",
     *         runtime: "PYTHON_3_11_6",
     *         inputValues: [{
     *                 name: "name",
     *                 type: "STRING",
     *                 value: "value"
     *             }],
     *         packages: [{
     *                 version: "version",
     *                 name: "name"
     *             }],
     *         outputType: "STRING"
     *     })
     */
    public async executeCode(
        request: Vellum.CodeExecutor,
        requestOptions?: VellumClient.RequestOptions
    ): Promise<Vellum.CodeExecutorResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                "v1/execute-code"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CodeExecutor.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CodeExecutorResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Vellum.BadRequestError(_response.error.body);
                default:
                    throw new errors.VellumError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Executes a deployed Prompt and returns the result.
     *
     * @param {Vellum.ExecutePromptRequest} request
     * @param {VellumClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vellum.BadRequestError}
     * @throws {@link Vellum.ForbiddenError}
     * @throws {@link Vellum.NotFoundError}
     * @throws {@link Vellum.InternalServerError}
     *
     * @example
     *     await client.executePrompt({
     *         inputs: [{
     *                 name: "name",
     *                 type: "STRING",
     *                 value: "value"
     *             }]
     *     })
     */
    public async executePrompt(
        request: Vellum.ExecutePromptRequest,
        requestOptions?: VellumClient.RequestOptions
    ): Promise<Vellum.ExecutePromptResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .predict,
                "v1/execute-prompt"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.ExecutePromptRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ExecutePromptResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Vellum.BadRequestError(_response.error.body);
                case 403:
                    throw new Vellum.ForbiddenError(_response.error.body);
                case 404:
                    throw new Vellum.NotFoundError(_response.error.body);
                case 500:
                    throw new Vellum.InternalServerError(_response.error.body);
                default:
                    throw new errors.VellumError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Executes a deployed Prompt and streams back the results.
     */
    public async executePromptStream(
        request: Vellum.ExecutePromptStreamRequest,
        requestOptions?: VellumClient.RequestOptions
    ): Promise<core.Stream<Vellum.ExecutePromptEvent>> {
        const _response = await core.fetcher<stream.Readable>({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .predict,
                "v1/execute-prompt-stream"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.ExecutePromptStreamRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            responseType: "sse",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return new core.Stream({
                stream: _response.body,
                parse: async (data) => {
                    return serializers.ExecutePromptEvent.parseOrThrow(data, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    });
                },
                signal: requestOptions?.abortSignal,
                eventShape: {
                    type: "json",
                    messageTerminator: "\n",
                },
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Vellum.BadRequestError(_response.error.body);
                case 403:
                    throw new Vellum.ForbiddenError(_response.error.body);
                case 404:
                    throw new Vellum.NotFoundError(_response.error.body);
                case 500:
                    throw new Vellum.InternalServerError(_response.error.body);
                default:
                    throw new errors.VellumError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Executes a deployed Workflow and returns its outputs.
     *
     * @param {Vellum.ExecuteWorkflowRequest} request
     * @param {VellumClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vellum.BadRequestError}
     * @throws {@link Vellum.NotFoundError}
     * @throws {@link Vellum.InternalServerError}
     *
     * @example
     *     await client.executeWorkflow({
     *         inputs: [{
     *                 name: "name",
     *                 type: "STRING",
     *                 value: "value"
     *             }]
     *     })
     */
    public async executeWorkflow(
        request: Vellum.ExecuteWorkflowRequest,
        requestOptions?: VellumClient.RequestOptions
    ): Promise<Vellum.ExecuteWorkflowResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .predict,
                "v1/execute-workflow"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.ExecuteWorkflowRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ExecuteWorkflowResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Vellum.BadRequestError(_response.error.body);
                case 404:
                    throw new Vellum.NotFoundError(_response.error.body);
                case 500:
                    throw new Vellum.InternalServerError(_response.error.body);
                default:
                    throw new errors.VellumError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Executes a deployed Workflow and streams back its results.
     */
    public async executeWorkflowStream(
        request: Vellum.ExecuteWorkflowStreamRequest,
        requestOptions?: VellumClient.RequestOptions
    ): Promise<core.Stream<Vellum.WorkflowStreamEvent>> {
        const _response = await core.fetcher<stream.Readable>({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .predict,
                "v1/execute-workflow-stream"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.ExecuteWorkflowStreamRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            responseType: "sse",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return new core.Stream({
                stream: _response.body,
                parse: async (data) => {
                    return serializers.WorkflowStreamEvent.parseOrThrow(data, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    });
                },
                signal: requestOptions?.abortSignal,
                eventShape: {
                    type: "json",
                    messageTerminator: "\n",
                },
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Vellum.BadRequestError(_response.error.body);
                case 404:
                    throw new Vellum.NotFoundError(_response.error.body);
                case 500:
                    throw new Vellum.InternalServerError(_response.error.body);
                default:
                    throw new errors.VellumError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Generate a completion using a previously defined deployment.
     *
     * Important: This endpoint is DEPRECATED and has been superseded by
     * [execute-prompt](/api-reference/api-reference/execute-prompt).
     *
     * @param {Vellum.GenerateBodyRequest} request
     * @param {VellumClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vellum.BadRequestError}
     * @throws {@link Vellum.ForbiddenError}
     * @throws {@link Vellum.NotFoundError}
     * @throws {@link Vellum.InternalServerError}
     *
     * @example
     *     await client.generate({
     *         requests: [{
     *                 inputValues: {
     *                     "key": "value"
     *                 }
     *             }]
     *     })
     */
    public async generate(
        request: Vellum.GenerateBodyRequest,
        requestOptions?: VellumClient.RequestOptions
    ): Promise<Vellum.GenerateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .predict,
                "v1/generate"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.GenerateBodyRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GenerateResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Vellum.BadRequestError(_response.error.body);
                case 403:
                    throw new Vellum.ForbiddenError(_response.error.body);
                case 404:
                    throw new Vellum.NotFoundError(_response.error.body);
                case 500:
                    throw new Vellum.InternalServerError(_response.error.body);
                default:
                    throw new errors.VellumError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Generate a stream of completions using a previously defined deployment.
     *
     * Important: This endpoint is DEPRECATED and has been superseded by
     * [execute-prompt-stream](/api-reference/api-reference/execute-prompt-stream).
     */
    public async generateStream(
        request: Vellum.GenerateStreamBodyRequest,
        requestOptions?: VellumClient.RequestOptions
    ): Promise<core.Stream<Vellum.GenerateStreamResponse>> {
        const _response = await core.fetcher<stream.Readable>({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .predict,
                "v1/generate-stream"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.GenerateStreamBodyRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            responseType: "sse",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return new core.Stream({
                stream: _response.body,
                parse: async (data) => {
                    return serializers.GenerateStreamResponse.parseOrThrow(data, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    });
                },
                signal: requestOptions?.abortSignal,
                eventShape: {
                    type: "json",
                    messageTerminator: "\n",
                },
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Vellum.BadRequestError(_response.error.body);
                case 403:
                    throw new Vellum.ForbiddenError(_response.error.body);
                case 404:
                    throw new Vellum.NotFoundError(_response.error.body);
                case 500:
                    throw new Vellum.InternalServerError(_response.error.body);
                default:
                    throw new errors.VellumError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Perform a search against a document index.
     *
     * @param {Vellum.SearchRequestBodyRequest} request
     * @param {VellumClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vellum.BadRequestError}
     * @throws {@link Vellum.NotFoundError}
     * @throws {@link Vellum.InternalServerError}
     *
     * @example
     *     await client.search({
     *         query: "query"
     *     })
     */
    public async search(
        request: Vellum.SearchRequestBodyRequest,
        requestOptions?: VellumClient.RequestOptions
    ): Promise<Vellum.SearchResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .predict,
                "v1/search"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SearchRequestBodyRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SearchResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Vellum.BadRequestError(_response.error.body);
                case 404:
                    throw new Vellum.NotFoundError(_response.error.body);
                case 500:
                    throw new Vellum.InternalServerError(_response.error.body);
                default:
                    throw new errors.VellumError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Used to submit feedback regarding the quality of previously generated completions.
     *
     * @param {Vellum.SubmitCompletionActualsRequest} request
     * @param {VellumClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vellum.BadRequestError}
     * @throws {@link Vellum.NotFoundError}
     * @throws {@link Vellum.InternalServerError}
     *
     * @example
     *     await client.submitCompletionActuals({
     *         actuals: [{}]
     *     })
     */
    public async submitCompletionActuals(
        request: Vellum.SubmitCompletionActualsRequest,
        requestOptions?: VellumClient.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .predict,
                "v1/submit-completion-actuals"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SubmitCompletionActualsRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Vellum.BadRequestError(_response.error.body);
                case 404:
                    throw new Vellum.NotFoundError(_response.error.body);
                case 500:
                    throw new Vellum.InternalServerError(_response.error.body);
                default:
                    throw new errors.VellumError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     *     Used to submit feedback regarding the quality of previous workflow execution and its outputs.
     *
     *     **Note:** Uses a base url of `https://predict.vellum.ai`.
     *
     * @param {Vellum.SubmitWorkflowExecutionActualsRequest} request
     * @param {VellumClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.submitWorkflowExecutionActuals({
     *         actuals: [{
     *                 outputType: "STRING"
     *             }]
     *     })
     */
    public async submitWorkflowExecutionActuals(
        request: Vellum.SubmitWorkflowExecutionActualsRequest,
        requestOptions?: VellumClient.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .predict,
                "v1/submit-workflow-execution-actuals"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SubmitWorkflowExecutionActualsRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VellumError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected _adHoc: AdHoc | undefined;

    public get adHoc(): AdHoc {
        return (this._adHoc ??= new AdHoc(this._options));
    }

    protected _containerImages: ContainerImages | undefined;

    public get containerImages(): ContainerImages {
        return (this._containerImages ??= new ContainerImages(this._options));
    }

    protected _deployments: Deployments | undefined;

    public get deployments(): Deployments {
        return (this._deployments ??= new Deployments(this._options));
    }

    protected _documentIndexes: DocumentIndexes | undefined;

    public get documentIndexes(): DocumentIndexes {
        return (this._documentIndexes ??= new DocumentIndexes(this._options));
    }

    protected _documents: Documents | undefined;

    public get documents(): Documents {
        return (this._documents ??= new Documents(this._options));
    }

    protected _folderEntities: FolderEntities | undefined;

    public get folderEntities(): FolderEntities {
        return (this._folderEntities ??= new FolderEntities(this._options));
    }

    protected _metricDefinitions: MetricDefinitions | undefined;

    public get metricDefinitions(): MetricDefinitions {
        return (this._metricDefinitions ??= new MetricDefinitions(this._options));
    }

    protected _mlModels: MlModels | undefined;

    public get mlModels(): MlModels {
        return (this._mlModels ??= new MlModels(this._options));
    }

    protected _sandboxes: Sandboxes | undefined;

    public get sandboxes(): Sandboxes {
        return (this._sandboxes ??= new Sandboxes(this._options));
    }

    protected _testSuiteRuns: TestSuiteRuns | undefined;

    public get testSuiteRuns(): TestSuiteRuns {
        return (this._testSuiteRuns ??= new TestSuiteRuns(this._options));
    }

    protected _testSuites: TestSuites | undefined;

    public get testSuites(): TestSuites {
        return (this._testSuites ??= new TestSuites(this._options));
    }

    protected _workflowDeployments: WorkflowDeployments | undefined;

    public get workflowDeployments(): WorkflowDeployments {
        return (this._workflowDeployments ??= new WorkflowDeployments(this._options));
    }

    protected _workflowSandboxes: WorkflowSandboxes | undefined;

    public get workflowSandboxes(): WorkflowSandboxes {
        return (this._workflowSandboxes ??= new WorkflowSandboxes(this._options));
    }

    protected _workflows: Workflows | undefined;

    public get workflows(): Workflows {
        return (this._workflows ??= new Workflows(this._options));
    }

    protected _workspaceSecrets: WorkspaceSecrets | undefined;

    public get workspaceSecrets(): WorkspaceSecrets {
        return (this._workspaceSecrets ??= new WorkspaceSecrets(this._options));
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { X_API_KEY: apiKeyValue };
    }
}
