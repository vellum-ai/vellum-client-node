/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../..";

/**
 * @example
 *     {
 *         actuals: []
 *     }
 */
export interface SubmitWorkflowExecutionActualsRequest {
    /** Feedback regarding the quality of an output on a previously executed workflow. */
    actuals: Vellum.SubmitWorkflowExecutionActualRequest[];
    /** The Vellum-generated ID of a previously executed workflow. Must provide either this or external_id. */
    executionId?: string;
    /** The external ID that was originally provided by when executing the workflow, if applicable, that you'd now like to submit actuals for. Must provide either this or execution_id. */
    externalId?: string;
}
