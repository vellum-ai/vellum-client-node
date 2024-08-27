/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Deployments {
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

export class Deployments {
    constructor(protected readonly _options: Deployments.Options = {}) {}

    /**
     * Used to list all Prompt Deployments.
     *
     * @param {Vellum.DeploymentsListRequest} request
     * @param {Deployments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.deployments.list()
     */
    public async list(
        request: Vellum.DeploymentsListRequest = {},
        requestOptions?: Deployments.RequestOptions
    ): Promise<Vellum.PaginatedSlimDeploymentReadList> {
        const { limit, offset, ordering, status } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (offset != null) {
            _queryParams["offset"] = offset.toString();
        }

        if (ordering != null) {
            _queryParams["ordering"] = ordering;
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                "v1/deployments"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.8.6",
                "User-Agent": "vellum-ai/0.8.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PaginatedSlimDeploymentReadList.parseOrThrow(_response.body, {
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
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Used to retrieve a Prompt Deployment given its ID or name.
     *
     * @param {string} id - Either the Deployment's ID or its unique name
     * @param {Deployments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.deployments.retrieve("id")
     */
    public async retrieve(id: string, requestOptions?: Deployments.RequestOptions): Promise<Vellum.DeploymentRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                `v1/deployments/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.8.6",
                "User-Agent": "vellum-ai/0.8.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
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
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieve a Deployment Release Tag by tag name, associated with a specified Deployment.
     *
     * @param {string} id - A UUID string identifying this deployment.
     * @param {string} name - The name of the Release Tag associated with this Deployment that you'd like to retrieve.
     * @param {Deployments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.deployments.retrieveDeploymentReleaseTag("id", "name")
     */
    public async retrieveDeploymentReleaseTag(
        id: string,
        name: string,
        requestOptions?: Deployments.RequestOptions
    ): Promise<Vellum.DeploymentReleaseTagRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                `v1/deployments/${encodeURIComponent(id)}/release-tags/${encodeURIComponent(name)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.8.6",
                "User-Agent": "vellum-ai/0.8.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.DeploymentReleaseTagRead.parseOrThrow(_response.body, {
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
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates an existing Release Tag associated with the specified Deployment.
     *
     * @param {string} id - A UUID string identifying this deployment.
     * @param {string} name - The name of the Release Tag associated with this Deployment that you'd like to update.
     * @param {Vellum.PatchedDeploymentReleaseTagUpdateRequest} request
     * @param {Deployments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.deployments.updateDeploymentReleaseTag("id", "name")
     */
    public async updateDeploymentReleaseTag(
        id: string,
        name: string,
        request: Vellum.PatchedDeploymentReleaseTagUpdateRequest = {},
        requestOptions?: Deployments.RequestOptions
    ): Promise<Vellum.DeploymentReleaseTagRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                `v1/deployments/${encodeURIComponent(id)}/release-tags/${encodeURIComponent(name)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.8.6",
                "User-Agent": "vellum-ai/0.8.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.PatchedDeploymentReleaseTagUpdateRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.DeploymentReleaseTagRead.parseOrThrow(_response.body, {
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
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Given a set of input variable values, compile the exact payload that Vellum would send to the configured model provider
     * for execution if the execute-prompt endpoint had been invoked. Note that this endpoint does not actually execute the
     * prompt or make an API call to the model provider.
     *
     * This endpoint is useful if you don't want to proxy LLM provider requests through Vellum and prefer to send them directly
     * to the provider yourself. Note that no guarantees are made on the format of this API's response schema, other than
     * that it will be a valid payload for the configured model provider. It's not recommended that you try to parse or
     * derive meaning from the response body and instead, should simply pass it directly to the model provider as is.
     *
     * We encourage you to seek advise from Vellum Support before integrating with this API for production use.
     *
     * @param {Vellum.DeploymentProviderPayloadRequest} request
     * @param {Deployments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vellum.BadRequestError}
     * @throws {@link Vellum.ForbiddenError}
     * @throws {@link Vellum.NotFoundError}
     * @throws {@link Vellum.InternalServerError}
     *
     * @example
     *     await client.deployments.retrieveProviderPayload({
     *         inputs: [{
     *                 name: "name",
     *                 type: "STRING",
     *                 value: "value"
     *             }]
     *     })
     */
    public async retrieveProviderPayload(
        request: Vellum.DeploymentProviderPayloadRequest,
        requestOptions?: Deployments.RequestOptions
    ): Promise<Vellum.DeploymentProviderPayloadResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                "v1/deployments/provider-payload"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.8.6",
                "User-Agent": "vellum-ai/0.8.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.DeploymentProviderPayloadRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.DeploymentProviderPayloadResponse.parseOrThrow(_response.body, {
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

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { X_API_KEY: apiKeyValue };
    }
}
