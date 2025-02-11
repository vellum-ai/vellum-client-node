/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Sandboxes {
    export interface Options {
        environment?: core.Supplier<environments.VellumEnvironment | environments.VellumEnvironmentUrls>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey: core.Supplier<string>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Sandboxes {
    constructor(protected readonly _options: Sandboxes.Options) {}

    /**
     * @param {string} id - A UUID string identifying this sandbox.
     * @param {string} promptVariantId - An ID identifying the Prompt you'd like to deploy.
     * @param {Vellum.DeploySandboxPromptRequest} request
     * @param {Sandboxes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.sandboxes.deployPrompt("id", "prompt_variant_id")
     */
    public async deployPrompt(
        id: string,
        promptVariantId: string,
        request: Vellum.DeploySandboxPromptRequest = {},
        requestOptions?: Sandboxes.RequestOptions,
    ): Promise<Vellum.DeploymentRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/sandboxes/${encodeURIComponent(id)}/prompts/${encodeURIComponent(promptVariantId)}/deploy`,
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.14.0",
                "User-Agent": "vellum-ai/0.14.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.DeploySandboxPromptRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.DeploymentRead.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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
                throw new errors.VellumTimeoutError(
                    "Timeout exceeded when calling POST /v1/sandboxes/{id}/prompts/{prompt_variant_id}/deploy.",
                );
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Upserts a new scenario for a sandbox, keying off of the optionally provided scenario id.
     *
     * If an id is provided and has a match, the scenario will be updated. If no id is provided or no match
     * is found, a new scenario will be appended to the end.
     *
     * Note that a full replacement of the scenario is performed, so any fields not provided will be removed
     * or overwritten with default values.
     *
     * @param {string} id - A UUID string identifying this sandbox.
     * @param {Vellum.UpsertSandboxScenarioRequest} request
     * @param {Sandboxes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.sandboxes.upsertSandboxScenario("id", {
     *         label: "Scenario 1",
     *         inputs: [{
     *                 type: "STRING",
     *                 value: "Hello, world!",
     *                 name: "var_1"
     *             }, {
     *                 type: "STRING",
     *                 value: "Why hello, there!",
     *                 name: "var_2"
     *             }]
     *     })
     *
     * @example
     *     await client.sandboxes.upsertSandboxScenario("id", {
     *         label: "Scenario 2",
     *         inputs: [{
     *                 type: "CHAT_HISTORY",
     *                 value: [{
     *                         text: "What's your favorite color?",
     *                         role: "USER"
     *                     }, {
     *                         text: "AI's don't have a favorite color.... Yet.",
     *                         role: "ASSISTANT"
     *                     }],
     *                 name: "chat_history"
     *             }]
     *     })
     */
    public async upsertSandboxScenario(
        id: string,
        request: Vellum.UpsertSandboxScenarioRequest,
        requestOptions?: Sandboxes.RequestOptions,
    ): Promise<Vellum.SandboxScenario> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/sandboxes/${encodeURIComponent(id)}/scenarios`,
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.14.0",
                "User-Agent": "vellum-ai/0.14.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UpsertSandboxScenarioRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SandboxScenario.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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
                throw new errors.VellumTimeoutError("Timeout exceeded when calling POST /v1/sandboxes/{id}/scenarios.");
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes an existing scenario from a sandbox, keying off of the provided scenario id.
     *
     * @param {string} id - A UUID string identifying this sandbox.
     * @param {string} scenarioId - An id identifying the scenario that you'd like to delete
     * @param {Sandboxes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.sandboxes.deleteSandboxScenario("id", "scenario_id")
     */
    public async deleteSandboxScenario(
        id: string,
        scenarioId: string,
        requestOptions?: Sandboxes.RequestOptions,
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/sandboxes/${encodeURIComponent(id)}/scenarios/${encodeURIComponent(scenarioId)}`,
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.14.0",
                "User-Agent": "vellum-ai/0.14.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
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
                throw new errors.VellumTimeoutError(
                    "Timeout exceeded when calling DELETE /v1/sandboxes/{id}/scenarios/{scenario_id}.",
                );
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { X_API_KEY: apiKeyValue };
    }
}
