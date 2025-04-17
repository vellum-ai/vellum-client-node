/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Prompts {
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

export class Prompts {
    constructor(protected readonly _options: Prompts.Options) {}

    /**
     * Used to pull the definition of a Prompt from Vellum.
     *
     * @param {string} id - The ID of the Prompt to pull from. Prompt Sandbox IDs are currently supported.
     * @param {Vellum.PromptsPullRequest} request
     * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vellum.BadRequestError}
     * @throws {@link Vellum.NotFoundError}
     *
     * @example
     *     await client.prompts.pull("id")
     */
    public async pull(
        id: string,
        request: Vellum.PromptsPullRequest = {},
        requestOptions?: Prompts.RequestOptions,
    ): Promise<Vellum.PromptExecConfig> {
        const { promptVariantId } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (promptVariantId != null) {
            _queryParams["prompt_variant_id"] = promptVariantId;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/prompts/${encodeURIComponent(id)}/pull`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.14.39",
                "User-Agent": "vellum-ai/0.14.39",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                Accept: "application/json",
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PromptExecConfig.parseOrThrow(_response.body, {
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
                throw new errors.VellumTimeoutError("Timeout exceeded when calling GET /v1/prompts/{id}/pull.");
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
