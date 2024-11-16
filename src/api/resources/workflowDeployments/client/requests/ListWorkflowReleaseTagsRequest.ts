/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../../index";

/**
 * @example
 *     {}
 */
export interface ListWorkflowReleaseTagsRequest {
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    source?: Vellum.ListWorkflowReleaseTagsRequestSource;
}
