/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace TestSuites {
    interface Options {
        environment?: environments.VellumEnvironment | environments.VellumEnvironmentUrls;
        apiKey: core.Supplier<string>;
    }
}

export class TestSuites {
    constructor(protected readonly options: TestSuites.Options) {}

    /**
     * <strong style="background-color:#ffc107; color:white; padding:4px; border-radius:4px">Unstable</strong>
     *
     * Upserts a new test case for a test suite, keying off of the optionally provided test case id.
     *
     * If an id is provided and has a match, the test case will be updated. If no id is provided or no match
     * is found, a new test case will be appended to the end.
     *
     * Note that a full replacement of the test case is performed, so any fields not provided will be removed
     * or overwritten with default values.
     */
    public async upsertTestSuiteTestCase(
        id: string,
        request: Vellum.TestSuiteTestCaseRequest
    ): Promise<Vellum.TestSuiteTestCase> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.VellumEnvironment.Production).default,
                `v1/test-suites/${id}/test-cases`
            ),
            method: "POST",
            headers: {
                X_API_KEY: await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            body: await serializers.TestSuiteTestCaseRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.TestSuiteTestCase.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
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
     * <strong style="background-color:#ffc107; color:white; padding:4px; border-radius:4px">Unstable</strong>
     *
     * Deletes an existing test case for a test suite, keying off of the test case id.
     */
    public async deleteTestSuiteTestCase(id: string, testCaseId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.VellumEnvironment.Production).default,
                `v1/test-suites/${id}/test-cases/${testCaseId}`
            ),
            method: "DELETE",
            headers: {
                X_API_KEY: await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
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
}
