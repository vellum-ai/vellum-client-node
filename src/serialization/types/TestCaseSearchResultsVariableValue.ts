/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { SearchResult } from "./SearchResult";

export const TestCaseSearchResultsVariableValue: core.serialization.ObjectSchema<
    serializers.TestCaseSearchResultsVariableValue.Raw,
    Vellum.TestCaseSearchResultsVariableValue
> = core.serialization.object({
    variableId: core.serialization.property("variable_id", core.serialization.string()),
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("SEARCH_RESULTS"),
    value: core.serialization.list(SearchResult).optional(),
});

export declare namespace TestCaseSearchResultsVariableValue {
    export interface Raw {
        variable_id: string;
        name: string;
        type: "SEARCH_RESULTS";
        value?: SearchResult.Raw[] | null;
    }
}
