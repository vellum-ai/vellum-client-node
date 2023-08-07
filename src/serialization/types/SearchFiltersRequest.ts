/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const SearchFiltersRequest: core.serialization.ObjectSchema<
    serializers.SearchFiltersRequest.Raw,
    Vellum.SearchFiltersRequest
> = core.serialization.object({
    externalIds: core.serialization.property(
        "external_ids",
        core.serialization.list(core.serialization.string()).optional()
    ),
    metadata: core.serialization.lazyObject(async () => (await import("..")).MetadataFilterConfigRequest).optional(),
});

export declare namespace SearchFiltersRequest {
    interface Raw {
        external_ids?: string[] | null;
        metadata?: serializers.MetadataFilterConfigRequest.Raw | null;
    }
}
