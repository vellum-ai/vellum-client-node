/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A user input representing a search results value
 */
export interface SearchResultsInputRequest {
    /** The variable's name */
    name: string;
    type: "SEARCH_RESULTS";
    value: Vellum.SearchResultRequest[];
}
