/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const SearchResult: core.serialization.ObjectSchema<serializers.SearchResult.Raw, Vellum.SearchResult> =
    core.serialization.object({
        text: core.serialization.string(),
        score: core.serialization.number(),
        keywords: core.serialization.list(core.serialization.string()),
        document: core.serialization.lazyObject(async () => (await import("..")).SearchResultDocument),
    });

export declare namespace SearchResult {
    interface Raw {
        text: string;
        score: number;
        keywords: string[];
        document: serializers.SearchResultDocument.Raw;
    }
}
