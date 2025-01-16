/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { SearchResult } from "./SearchResult";

export const SearchResultsInput: core.serialization.ObjectSchema<
    serializers.SearchResultsInput.Raw,
    Vellum.SearchResultsInput
> = core.serialization.object({
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("SEARCH_RESULTS"),
    value: core.serialization.list(SearchResult),
});

export declare namespace SearchResultsInput {
    export interface Raw {
        name: string;
        type: "SEARCH_RESULTS";
        value: SearchResult.Raw[];
    }
}
