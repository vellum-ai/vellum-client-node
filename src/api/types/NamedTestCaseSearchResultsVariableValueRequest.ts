/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * Named Test Case value that is of type SEARCH_RESULTS
 */
export interface NamedTestCaseSearchResultsVariableValueRequest {
    type: "SEARCH_RESULTS";
    value?: Vellum.SearchResultRequest[] | null;
    name: string;
}
