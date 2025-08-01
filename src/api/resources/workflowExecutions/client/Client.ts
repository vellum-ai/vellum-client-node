/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace WorkflowExecutions {
    export interface Options {
        environment?: core.Supplier<environments.VellumEnvironment | environments.VellumEnvironmentUrls>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey: core.Supplier<string>;
        /** Override the X-API-Version header */
        apiVersion?: core.Supplier<Vellum.ApiVersionEnum | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-API-Version header */
        apiVersion?: Vellum.ApiVersionEnum | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class WorkflowExecutions {
    constructor(protected readonly _options: WorkflowExecutions.Options) {}

    /**
     * @param {string} executionId
     * @param {WorkflowExecutions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.workflowExecutions.retrieveWorkflowExecutionDetail("execution_id")
     */
    public retrieveWorkflowExecutionDetail(
        executionId: string,
        requestOptions?: WorkflowExecutions.RequestOptions,
    ): core.HttpResponsePromise<Vellum.WorkflowExecutionDetail> {
        return core.HttpResponsePromise.fromPromise(
            this.__retrieveWorkflowExecutionDetail(executionId, requestOptions),
        );
    }

    private async __retrieveWorkflowExecutionDetail(
        executionId: string,
        requestOptions?: WorkflowExecutions.RequestOptions,
    ): Promise<core.WithRawResponse<Vellum.WorkflowExecutionDetail>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/workflow-executions/${encodeURIComponent(executionId)}/detail`,
            ),
            method: "GET",
            headers: {
                "X-API-Version":
                    (await core.Supplier.get(this._options.apiVersion)) != null
                        ? serializers.ApiVersionEnum.jsonOrThrow(await core.Supplier.get(this._options.apiVersion), {
                              unrecognizedObjectKeys: "strip",
                          })
                        : "2025-07-30",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "1.0.7",
                "User-Agent": "vellum-ai/1.0.7",
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
            return {
                data: serializers.WorkflowExecutionDetail.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VellumError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.VellumTimeoutError(
                    "Timeout exceeded when calling GET /v1/workflow-executions/{execution_id}/detail.",
                );
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-API-KEY": apiKeyValue };
    }
}
