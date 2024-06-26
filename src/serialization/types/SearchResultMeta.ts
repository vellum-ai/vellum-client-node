/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { SearchResultMetaSource } from "./SearchResultMetaSource";

export const SearchResultMeta: core.serialization.ObjectSchema<
    serializers.SearchResultMeta.Raw,
    Vellum.SearchResultMeta
> = core.serialization.object({
    source: SearchResultMetaSource.optional(),
});

export declare namespace SearchResultMeta {
    interface Raw {
        source?: SearchResultMetaSource.Raw | null;
    }
}
