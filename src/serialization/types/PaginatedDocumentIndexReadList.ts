/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const PaginatedDocumentIndexReadList: core.serialization.ObjectSchema<
    serializers.PaginatedDocumentIndexReadList.Raw,
    Vellum.PaginatedDocumentIndexReadList
> = core.serialization.object({
    count: core.serialization.number().optional(),
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).DocumentIndexRead))
        .optional(),
});

export declare namespace PaginatedDocumentIndexReadList {
    interface Raw {
        count?: number | null;
        next?: string | null;
        previous?: string | null;
        results?: serializers.DocumentIndexRead.Raw[] | null;
    }
}
