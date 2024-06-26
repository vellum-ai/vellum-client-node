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
    value: core.serialization.list(SearchResult).optional(),
});

export declare namespace CodeExecutionNodeSearchResultsResult {
    interface Raw {
        id: string;
        value?: SearchResult.Raw[] | null;
    }
}
