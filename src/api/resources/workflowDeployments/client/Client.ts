/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace WorkflowDeployments {
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

export class WorkflowDeployments {
    constructor(protected readonly _options: WorkflowDeployments.Options) {}

    /**
     * Used to list all Workflow Deployments.
     *
     * @param {Vellum.WorkflowDeploymentsListRequest} request
     * @param {WorkflowDeployments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.workflowDeployments.list()
     */
    public async list(
        request: Vellum.WorkflowDeploymentsListRequest = {},
        requestOptions?: WorkflowDeployments.RequestOptions,
    ): Promise<Vellum.PaginatedSlimWorkflowDeploymentList> {
        const { limit, offset, ordering, status } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
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
            _queryParams["status"] = serializers.WorkflowDeploymentsListRequestStatus.jsonOrThrow(status, {
                unrecognizedObjectKeys: "strip",
            });
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                "v1/workflow-deployments",
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.13.24",
                "User-Agent": "vellum-ai/0.13.24",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
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
            return serializers.PaginatedSlimWorkflowDeploymentList.parseOrThrow(_response.body, {
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
                throw new errors.VellumTimeoutError("Timeout exceeded when calling GET /v1/workflow-deployments.");
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Used to retrieve a workflow deployment given its ID or name.
     *
     * @param {string} id - Either the Workflow Deployment's ID or its unique name
     * @param {WorkflowDeployments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.workflowDeployments.retrieve("id")
     */
    public async retrieve(
        id: string,
        requestOptions?: WorkflowDeployments.RequestOptions,
    ): Promise<Vellum.WorkflowDeploymentRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/workflow-deployments/${encodeURIComponent(id)}`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.13.24",
                "User-Agent": "vellum-ai/0.13.24",
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
            return serializers.WorkflowDeploymentRead.parseOrThrow(_response.body, {
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
                throw new errors.VellumTimeoutError("Timeout exceeded when calling GET /v1/workflow-deployments/{id}.");
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieve a specific Workflow Deployment History Item by either its UUID or the name of a Release Tag that points to it.
     *
     * @param {string} historyIdOrReleaseTag - Either the UUID of Workflow Deployment History Item you'd like to retrieve, or the name of a Release Tag that's pointing to the Workflow Deployment History Item you'd like to retrieve.
     * @param {string} id - A UUID string identifying this workflow deployment.
     * @param {WorkflowDeployments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.workflowDeployments.workflowDeploymentHistoryItemRetrieve("history_id_or_release_tag", "id")
     */
    public async workflowDeploymentHistoryItemRetrieve(
        historyIdOrReleaseTag: string,
        id: string,
        requestOptions?: WorkflowDeployments.RequestOptions,
    ): Promise<Vellum.WorkflowDeploymentHistoryItem> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/workflow-deployments/${encodeURIComponent(id)}/history/${encodeURIComponent(historyIdOrReleaseTag)}`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.13.24",
                "User-Agent": "vellum-ai/0.13.24",
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
            return serializers.WorkflowDeploymentHistoryItem.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /v1/workflow-deployments/{id}/history/{history_id_or_release_tag}.",
                );
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * List Release Tags associated with the specified Workflow Deployment
     *
     * @param {string} id - Either the Workflow Deployment's ID or its unique name
     * @param {Vellum.ListWorkflowReleaseTagsRequest} request
     * @param {WorkflowDeployments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.workflowDeployments.listWorkflowReleaseTags("id")
     */
    public async listWorkflowReleaseTags(
        id: string,
        request: Vellum.ListWorkflowReleaseTagsRequest = {},
        requestOptions?: WorkflowDeployments.RequestOptions,
    ): Promise<Vellum.PaginatedWorkflowReleaseTagReadList> {
        const { limit, offset, ordering, source } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (offset != null) {
            _queryParams["offset"] = offset.toString();
        }

        if (ordering != null) {
            _queryParams["ordering"] = ordering;
        }

        if (source != null) {
            _queryParams["source"] = serializers.ListWorkflowReleaseTagsRequestSource.jsonOrThrow(source, {
                unrecognizedObjectKeys: "strip",
            });
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/workflow-deployments/${encodeURIComponent(id)}/release-tags`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.13.24",
                "User-Agent": "vellum-ai/0.13.24",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
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
            return serializers.PaginatedWorkflowReleaseTagReadList.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /v1/workflow-deployments/{id}/release-tags.",
                );
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieve a Workflow Release Tag by tag name, associated with a specified Workflow Deployment.
     *
     * @param {string} id - A UUID string identifying this workflow deployment.
     * @param {string} name - The name of the Release Tag associated with this Workflow Deployment that you'd like to retrieve.
     * @param {WorkflowDeployments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.workflowDeployments.retrieveWorkflowReleaseTag("id", "name")
     */
    public async retrieveWorkflowReleaseTag(
        id: string,
        name: string,
        requestOptions?: WorkflowDeployments.RequestOptions,
    ): Promise<Vellum.WorkflowReleaseTagRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/workflow-deployments/${encodeURIComponent(id)}/release-tags/${encodeURIComponent(name)}`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.13.24",
                "User-Agent": "vellum-ai/0.13.24",
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
            return serializers.WorkflowReleaseTagRead.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /v1/workflow-deployments/{id}/release-tags/{name}.",
                );
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates an existing Release Tag associated with the specified Workflow Deployment.
     *
     * @param {string} id - A UUID string identifying this workflow deployment.
     * @param {string} name - The name of the Release Tag associated with this Workflow Deployment that you'd like to update.
     * @param {Vellum.PatchedWorkflowReleaseTagUpdateRequest} request
     * @param {WorkflowDeployments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.workflowDeployments.updateWorkflowReleaseTag("id", "name")
     */
    public async updateWorkflowReleaseTag(
        id: string,
        name: string,
        request: Vellum.PatchedWorkflowReleaseTagUpdateRequest = {},
        requestOptions?: WorkflowDeployments.RequestOptions,
    ): Promise<Vellum.WorkflowReleaseTagRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/workflow-deployments/${encodeURIComponent(id)}/release-tags/${encodeURIComponent(name)}`,
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.13.24",
                "User-Agent": "vellum-ai/0.13.24",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.PatchedWorkflowReleaseTagUpdateRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.WorkflowReleaseTagRead.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling PATCH /v1/workflow-deployments/{id}/release-tags/{name}.",
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
