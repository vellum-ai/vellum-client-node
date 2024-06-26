/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * The unsuccessful response from the Workflow execution containing an error specifying what went wrong.
 */
export interface RejectedExecuteWorkflowWorkflowResultEvent {
    id: string;
    ts: Date;
    error: Vellum.WorkflowEventError;
}
