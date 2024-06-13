/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * An output returned by a node that is of type SEARCH_RESULTS.
 */
export interface NodeOutputCompiledSearchResultsValue {
    value?: Vellum.SearchResult[];
    nodeOutputId: string;
    state?: Vellum.WorkflowNodeResultEventState;
}
