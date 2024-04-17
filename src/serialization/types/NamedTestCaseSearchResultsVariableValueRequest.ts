/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { SearchResultRequest } from "./SearchResultRequest";

export const NamedTestCaseSearchResultsVariableValueRequest: core.serialization.ObjectSchema<
    serializers.NamedTestCaseSearchResultsVariableValueRequest.Raw,
    Vellum.NamedTestCaseSearchResultsVariableValueRequest
> = core.serialization.object({
    value: core.serialization.list(SearchResultRequest).optional(),
    name: core.serialization.string(),
});

export declare namespace NamedTestCaseSearchResultsVariableValueRequest {
    interface Raw {
        value?: SearchResultRequest.Raw[] | null;
        name: string;
    }
}
