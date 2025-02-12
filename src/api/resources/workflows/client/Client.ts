/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../../index";
import * as stream from "stream";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import * as fs from "fs";
import { Blob } from "buffer";

export declare namespace Workflows {
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

export class Workflows {
    constructor(protected readonly _options: Workflows.Options) {}

    /**
     * @throws {@link Vellum.BadRequestError}
     */
    public async pull(
        id: string,
        request: Vellum.WorkflowsPullRequest = {},
        requestOptions?: Workflows.RequestOptions,
    ): Promise<stream.Readable> {
        const { excludeCode, format, includeJson, includeSandbox, strict } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (excludeCode != null) {
            _queryParams["exclude_code"] = excludeCode.toString();
        }

        if (format != null) {
            _queryParams["format"] = serializers.WorkflowsPullRequestFormat.jsonOrThrow(format, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (includeJson != null) {
            _queryParams["include_json"] = includeJson.toString();
        }

        if (includeSandbox != null) {
            _queryParams["include_sandbox"] = includeSandbox.toString();
        }

        if (strict != null) {
            _queryParams["strict"] = strict.toString();
        }

        const _response = await core.fetcher<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/workflows/${encodeURIComponent(id)}/pull`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.14.1",
                "User-Agent": "vellum-ai/0.14.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            responseType: "streaming",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body;
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
                throw new errors.VellumTimeoutError("Timeout exceeded when calling GET /v1/workflows/{id}/pull.");
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {File | fs.ReadStream | Blob | undefined} artifact
     * @param {Vellum.WorkflowPushRequest} request
     * @param {Workflows.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.workflows.push(fs.createReadStream("/path/to/your/file"), {
     *         execConfig: "exec_config"
     *     })
     */
    public async push(
        artifact: File | fs.ReadStream | Blob | undefined,
        request: Vellum.WorkflowPushRequest,
        requestOptions?: Workflows.RequestOptions,
    ): Promise<Vellum.WorkflowPushResponse> {
        const _request = await core.newFormData();
        _request.append(
            "exec_config",
            serializers.WorkflowPushExecConfig.jsonOrThrow(request.execConfig, { unrecognizedObjectKeys: "strip" }),
        );
        if (request.workflowSandboxId != null) {
            _request.append("workflow_sandbox_id", request.workflowSandboxId);
        }

        if (request.deploymentConfig != null) {
            _request.append(
                "deployment_config",
                JSON.stringify(
                    serializers.WorkflowPushDeploymentConfigRequest.jsonOrThrow(request.deploymentConfig, {
                        unrecognizedObjectKeys: "strip",
                    }),
                ),
            );
        }

        if (artifact != null) {
            await _request.appendFile("artifact", artifact);
        }

        if (request.dryRun != null) {
            _request.append("dry_run", request.dryRun.toString());
        }

        if (request.strict != null) {
            _request.append("strict", request.strict.toString());
        }

        const _maybeEncodedRequest = await _request.getRequest();
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                "v1/workflows/push",
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.14.1",
                "User-Agent": "vellum-ai/0.14.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ..._maybeEncodedRequest.headers,
                ...requestOptions?.headers,
            },
            requestType: "file",
            duplex: _maybeEncodedRequest.duplex,
            body: _maybeEncodedRequest.body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.WorkflowPushResponse.parseOrThrow(_response.body, {
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
                throw new errors.VellumTimeoutError("Timeout exceeded when calling POST /v1/workflows/push.");
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
