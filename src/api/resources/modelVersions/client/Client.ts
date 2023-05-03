/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace ModelVersions {
    interface Options {
        environment?: environments.VellumEnvironment | environments.VellumEnvironmentUrls;
        apiKey: core.Supplier<string>;
    }
}

export class ModelVersions {
    constructor(protected readonly options: ModelVersions.Options) {}

    public async retrieve(id: string): Promise<Vellum.ModelVersionRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.VellumEnvironment.Production).default,
                `v1/model-versions/${id}`
            ),
            method: "GET",
            headers: {
                X_API_KEY: await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.ModelVersionRead.parseOrThrow(_response.body, {
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
}
