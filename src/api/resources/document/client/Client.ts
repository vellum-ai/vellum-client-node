/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { VellumApi } from "@fern-api/vellum";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Document {
    interface Options {
        environment?: environments.VellumApiEnvironment | environments.VellumApiEnvironmentUrls;
        apiKey: core.Supplier<string>;
    }
}

export class Document {
    constructor(private readonly options: Document.Options) {}

    /**
     * @throws {VellumApi.BadRequestError}
     * @throws {VellumApi.NotFoundError}
     * @throws {VellumApi.InternalServerError}
     */
    public async upload(request: VellumApi.UploadDocumentRequest): Promise<VellumApi.UploadDocumentResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.VellumApiEnvironment.Production).document,
                "/v1/upload-document"
            ),
            method: "POST",
            contentType: "application/json",
            body: await serializers.UploadDocumentRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.UploadDocumentResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new VellumApi.BadRequestError(
                        await serializers.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 400:
                    throw new VellumApi.NotFoundError(
                        await serializers.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 400:
                    throw new VellumApi.InternalServerError(
                        await serializers.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.VellumApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumApiTimeoutError();
            case "unknown":
                throw new errors.VellumApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
