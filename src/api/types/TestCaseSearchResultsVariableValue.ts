/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

/**
 * A search results value for a variable in a Test Case.
 */
export interface TestCaseSearchResultsVariableValue {
    variableId: string;
    name: string;
    value?: Vellum.SearchResult[];
}
