/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface ListWorkflowDeploymentEventExecutionsRequest {
    filters?: string;
    /**
     * Number of executions to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the executions.
     */
    offset?: number;
}
