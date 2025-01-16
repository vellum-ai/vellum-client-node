/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { SearchResult } from "./SearchResult";

export const CodeExecutionNodeSearchResultsResult: core.serialization.ObjectSchema<
    serializers.CodeExecutionNodeSearchResultsResult.Raw,
    Vellum.CodeExecutionNodeSearchResultsResult
> = core.serialization.object({
    id: core.serialization.string(),
    type: core.serialization.stringLiteral("SEARCH_RESULTS"),
    value: core.serialization.list(SearchResult).optional(),
});

export declare namespace CodeExecutionNodeSearchResultsResult {
    export interface Raw {
        id: string;
        type: "SEARCH_RESULTS";
        value?: SearchResult.Raw[] | null;
    }
}
