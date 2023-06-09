/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const SearchResult: core.serialization.ObjectSchema<serializers.SearchResult.Raw, Vellum.SearchResult> =
    core.serialization.object({
        document: core.serialization.lazyObject(async () => (await import("..")).Document),
        text: core.serialization.string(),
        keywords: core.serialization.list(core.serialization.string()),
        score: core.serialization.number(),
    });

export declare namespace SearchResult {
    interface Raw {
        document: serializers.Document.Raw;
        text: string;
        keywords: string[];
        score: number;
    }
}
