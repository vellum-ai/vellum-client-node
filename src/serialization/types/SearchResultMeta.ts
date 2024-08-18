/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ComponentsSchemasPdfSearchResultMetaSource } from "./ComponentsSchemasPdfSearchResultMetaSource";

export const SearchResultMeta: core.serialization.ObjectSchema<
    serializers.SearchResultMeta.Raw,
    Vellum.SearchResultMeta
> = core.serialization.object({
    source: ComponentsSchemasPdfSearchResultMetaSource.optional(),
});

export declare namespace SearchResultMeta {
    interface Raw {
        source?: ComponentsSchemasPdfSearchResultMetaSource.Raw | null;
    }
}
