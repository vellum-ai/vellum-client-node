/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace WorkflowDeployments {
    interface Options {
        environment?: core.Supplier<environments.VellumEnvironment | environments.VellumEnvironmentUrls>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class WorkflowDeployments {
    constructor(protected readonly _options: WorkflowDeployments.Options) {}

    public async list(
        request: Vellum.WorkflowDeploymentsListRequest = {},
        requestOptions?: WorkflowDeployments.RequestOptions
    ): Promise<Vellum.PaginatedSlimWorkflowDeploymentList> {
        const { limit, offset, ordering, status } = request;
        const _queryParams: Record<string, string | string[]> = {};
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
                "v1/workflow-deployments"
            ),
            method: "GET",
            headers: {
                X_API_KEY: await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.3.5",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.PaginatedSlimWorkflowDeploymentList.parseOrThrow(_response.body, {
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
}
