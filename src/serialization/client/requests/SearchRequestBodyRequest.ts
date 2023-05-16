/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import * as Vellum from "../../../api";
import * as core from "../../../core";

export const SearchRequestBodyRequest: core.serialization.Schema<
    serializers.SearchRequestBodyRequest.Raw,
    Vellum.SearchRequestBodyRequest
> = core.serialization.object({
    indexId: core.serialization.property("index_id", core.serialization.string().optional()),
    indexName: core.serialization.property("index_name", core.serialization.string().optional()),
    query: core.serialization.string(),
    options: core.serialization.lazyObject(async () => (await import("../..")).SearchRequestOptionsRequest).optional(),
});

export declare namespace SearchRequestBodyRequest {
    interface Raw {
        index_id?: string | null;
        index_name?: string | null;
        query: string;
        options?: serializers.SearchRequestOptionsRequest.Raw | null;
    }
}