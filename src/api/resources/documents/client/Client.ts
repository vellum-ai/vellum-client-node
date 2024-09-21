/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";
import * as fs from "fs";
import { Blob } from "buffer";

export declare namespace Documents {
    interface Options {
        environment?: core.Supplier<environments.VellumEnvironment | environments.VellumEnvironmentUrls>;
        apiKey: core.Supplier<string>;
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

export class Documents {
    constructor(protected readonly _options: Documents.Options) {}

    /**
     * Used to list documents. Optionally filter on supported fields.
     *
     * @param {Vellum.DocumentsListRequest} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documents.list()
     */
    public async list(
        request: Vellum.DocumentsListRequest = {},
        requestOptions?: Documents.RequestOptions
    ): Promise<Vellum.PaginatedSlimDocumentList> {
        const { documentIndexId, limit, offset, ordering } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (documentIndexId != null) {
            _queryParams["document_index_id"] = documentIndexId;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (offset != null) {
            _queryParams["offset"] = offset.toString();
        }

        if (ordering != null) {
            _queryParams["ordering"] = ordering;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                "v1/documents"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.8.13",
                "User-Agent": "vellum-ai/0.8.13",
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
            return serializers.PaginatedSlimDocumentList.parseOrThrow(_response.body, {
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
     * Retrieve a Document, keying off of either its Vellum-generated ID or its external ID.
     *
     * @param {string} id - A UUID string identifying this document.
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documents.retrieve("id")
     */
    public async retrieve(id: string, requestOptions?: Documents.RequestOptions): Promise<Vellum.DocumentRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                `v1/documents/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.8.13",
                "User-Agent": "vellum-ai/0.8.13",
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
            return serializers.DocumentRead.parseOrThrow(_response.body, {
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
     * Delete a Document, keying off of either its Vellum-generated ID or its external ID.
     *
     * @param {string} id - A UUID string identifying this document.
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documents.destroy("id")
     */
    public async destroy(id: string, requestOptions?: Documents.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .documents,
                `v1/documents/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.8.13",
                "User-Agent": "vellum-ai/0.8.13",
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

    /**
     * Update a Document, keying off of either its Vellum-generated ID or its external ID. Particularly useful for updating its metadata.
     *
     * @param {string} id - A UUID string identifying this document.
     * @param {Vellum.PatchedDocumentUpdateRequest} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documents.partialUpdate("id")
     */
    public async partialUpdate(
        id: string,
        request: Vellum.PatchedDocumentUpdateRequest = {},
        requestOptions?: Documents.RequestOptions
    ): Promise<Vellum.DocumentRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                `v1/documents/${encodeURIComponent(id)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.8.13",
                "User-Agent": "vellum-ai/0.8.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.PatchedDocumentUpdateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.DocumentRead.parseOrThrow(_response.body, {
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
     * Upload a document to be indexed and used for search.
     *
     * **Note:** Uses a base url of `https://documents.vellum.ai`.
     *
     * This is a multipart/form-data request. The `contents` field should be a file upload. It also expects a JSON body with the following fields:
     *
     * - `add_to_index_names: list[str]` - Optionally include the names of all indexes that you'd like this document to be included in
     * - `external_id: str | None` - Optionally include an external ID for this document. This is useful if you want to re-upload the same document later when its contents change and would like it to be re-indexed.
     * - `label: str` - A human-friendly name for this document. Typically the filename.
     * - `keywords: list[str] | None` - Optionally include a list of keywords that'll be associated with this document. Used when performing keyword searches.
     * - `metadata: dict[str, Any]` - A stringified JSON object containing any metadata associated with the document that you'd like to filter upon later.
     *
     * @param {File | fs.ReadStream | Blob} contents
     * @param {Vellum.UploadDocumentBodyRequest} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vellum.BadRequestError}
     * @throws {@link Vellum.NotFoundError}
     * @throws {@link Vellum.InternalServerError}
     *
     * @example
     *     await client.documents.upload(fs.createReadStream("/path/to/your/file"), {
     *         label: "label"
     *     })
     */
    public async upload(
        contents: File | fs.ReadStream | Blob,
        request: Vellum.UploadDocumentBodyRequest,
        requestOptions?: Documents.RequestOptions
    ): Promise<Vellum.UploadDocumentResponse> {
        const _request = await core.newFormData();
        if (request.addToIndexNames != null) {
            for (const _item of request.addToIndexNames) {
                await _request.append("add_to_index_names", _item);
            }
        }

        if (request.externalId != null) {
            await _request.append("external_id", request.externalId);
        }

        await _request.append("label", request.label);
        await _request.appendFile("contents", contents);
        if (request.keywords != null) {
            for (const _item of request.keywords) {
                await _request.append("keywords", _item);
            }
        }

        if (request.metadata != null) {
            await _request.append("metadata", request.metadata);
        }

        const _maybeEncodedRequest = await _request.getRequest();
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .documents,
                "v1/upload-document"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.8.13",
                "User-Agent": "vellum-ai/0.8.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ..._maybeEncodedRequest.headers,
            },
            requestType: "file",
            duplex: _maybeEncodedRequest.duplex,
            body: _maybeEncodedRequest.body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UploadDocumentResponse.parseOrThrow(_response.body, {
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
