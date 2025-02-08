/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";
import * as stream from "stream";

export declare namespace TestSuites {
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

export class TestSuites {
    constructor(protected readonly _options: TestSuites.Options) {}

    /**
     * List the Test Cases associated with a Test Suite
     *
     * @param {string} id - Either the Test Suites' ID or its unique name
     * @param {Vellum.ListTestSuiteTestCasesRequest} request
     * @param {TestSuites.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.testSuites.listTestSuiteTestCases("id")
     */
    public async listTestSuiteTestCases(
        id: string,
        request: Vellum.ListTestSuiteTestCasesRequest = {},
        requestOptions?: TestSuites.RequestOptions,
    ): Promise<Vellum.PaginatedTestSuiteTestCaseList> {
        const { limit, offset } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (offset != null) {
            _queryParams["offset"] = offset.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/test-suites/${encodeURIComponent(id)}/test-cases`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.13.28",
                "User-Agent": "vellum-ai/0.13.28",
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
            return serializers.PaginatedTestSuiteTestCaseList.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /v1/test-suites/{id}/test-cases.",
                );
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Upserts a new test case for a test suite, keying off of the optionally provided test case id.
     *
     * If an id is provided and has a match, the test case will be updated. If no id is provided or no match
     * is found, a new test case will be appended to the end.
     *
     * Note that a full replacement of the test case is performed, so any fields not provided will be removed
     * or overwritten with default values.
     *
     * @param {string} id - Either the Test Suites' ID or its unique name
     * @param {Vellum.UpsertTestSuiteTestCaseRequest} request
     * @param {TestSuites.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.testSuites.upsertTestSuiteTestCase("id", {
     *         label: "Test Case 1",
     *         inputValues: [{
     *                 type: "STRING",
     *                 value: "What are your favorite colors?",
     *                 name: "var_1"
     *             }],
     *         evaluationValues: [{
     *                 type: "ARRAY",
     *                 value: [{
     *                         type: "STRING",
     *                         value: "Red"
     *                     }, {
     *                         type: "STRING",
     *                         value: "Green"
     *                     }, {
     *                         type: "STRING",
     *                         value: "Blue"
     *                     }],
     *                 name: "var_2"
     *             }]
     *     })
     */
    public async upsertTestSuiteTestCase(
        id: string,
        request: Vellum.UpsertTestSuiteTestCaseRequest,
        requestOptions?: TestSuites.RequestOptions,
    ): Promise<Vellum.TestSuiteTestCase> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/test-suites/${encodeURIComponent(id)}/test-cases`,
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.13.28",
                "User-Agent": "vellum-ai/0.13.28",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UpsertTestSuiteTestCaseRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.TestSuiteTestCase.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling POST /v1/test-suites/{id}/test-cases.",
                );
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Created, replace, and delete Test Cases within the specified Test Suite in bulk
     */
    public async testSuiteTestCasesBulk(
        id: string,
        request: Vellum.TestSuiteTestCaseBulkOperationRequest[],
        requestOptions?: TestSuites.RequestOptions,
    ): Promise<core.Stream<Vellum.TestSuiteTestCaseBulkResult[]>> {
        const _response = await core.fetcher<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/test-suites/${encodeURIComponent(id)}/test-cases-bulk`,
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.13.28",
                "User-Agent": "vellum-ai/0.13.28",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/x-ndjson",
            requestType: "json",
            body: serializers.testSuites.testSuiteTestCasesBulk.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            responseType: "sse",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return new core.Stream({
                stream: _response.body,
                parse: async (data) => {
                    return serializers.testSuites.testSuiteTestCasesBulk.StreamData.parseOrThrow(data, {
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
                    "Timeout exceeded when calling POST /v1/test-suites/{id}/test-cases-bulk.",
                );
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes an existing test case for a test suite, keying off of the test case id.
     *
     * @param {string} id - Either the Test Suites' ID or its unique name
     * @param {string} testCaseId - An id identifying the test case that you'd like to delete
     * @param {TestSuites.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.testSuites.deleteTestSuiteTestCase("id", "test_case_id")
     */
    public async deleteTestSuiteTestCase(
        id: string,
        testCaseId: string,
        requestOptions?: TestSuites.RequestOptions,
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                        .default,
                `v1/test-suites/${encodeURIComponent(id)}/test-cases/${encodeURIComponent(testCaseId)}`,
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.13.28",
                "User-Agent": "vellum-ai/0.13.28",
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
                    "Timeout exceeded when calling DELETE /v1/test-suites/{id}/test-cases/{test_case_id}.",
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
