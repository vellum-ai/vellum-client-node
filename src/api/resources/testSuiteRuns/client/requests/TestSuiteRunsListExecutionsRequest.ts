/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface TestSuiteRunsListExecutionsRequest {
    /**
     * The response fields to expand for more information.
     * - 'results.metric_results.metric_label' expands the metric label for each metric result.
     * - 'results.metric_results.metric_definition' expands the metric definition for each metric result.
     * - 'results.metric_results.metric_definition.name' expands the metric definition name for each metric result.
     */
    expand?: string | string[];
    /**
     * Number of results to return per page.
     */
    limit?: number | null;
    /**
     * The initial index from which to return the results.
     */
    offset?: number | null;
}
