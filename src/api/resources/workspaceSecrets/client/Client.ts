/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace WorkspaceSecrets {
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

export class WorkspaceSecrets {
    constructor(protected readonly _options: WorkspaceSecrets.Options) {}

    /**
     * Used to retrieve a Workspace Secret given its ID or name.
     *
     * @param {string} id - Either the Workspace Secret's ID or its unique name
     * @param {WorkspaceSecrets.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.workspaceSecrets.retrieve("id")
     */
    public async retrieve(
        id: string,
        requestOptions?: WorkspaceSecrets.RequestOptions,
    ): Promise<Vellum.WorkspaceSecretRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/workspace-secrets/${encodeURIComponent(id)}`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.13.11",
                "User-Agent": "vellum-ai/0.13.11",
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
            return serializers.WorkspaceSecretRead.parseOrThrow(_response.body, {
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
                throw new errors.VellumTimeoutError("Timeout exceeded when calling GET /v1/workspace-secrets/{id}.");
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Used to update a Workspace Secret given its ID or name.
     *
     * @param {string} id - Either the Workspace Secret's ID or its unique name
     * @param {Vellum.PatchedWorkspaceSecretUpdateRequest} request
     * @param {WorkspaceSecrets.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.workspaceSecrets.partialUpdate("id")
     */
    public async partialUpdate(
        id: string,
        request: Vellum.PatchedWorkspaceSecretUpdateRequest = {},
        requestOptions?: WorkspaceSecrets.RequestOptions,
    ): Promise<Vellum.WorkspaceSecretRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/workspace-secrets/${encodeURIComponent(id)}`,
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.13.11",
                "User-Agent": "vellum-ai/0.13.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.PatchedWorkspaceSecretUpdateRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.WorkspaceSecretRead.parseOrThrow(_response.body, {
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
                throw new errors.VellumTimeoutError("Timeout exceeded when calling PATCH /v1/workspace-secrets/{id}.");
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
