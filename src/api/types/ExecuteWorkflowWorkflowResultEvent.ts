/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type ExecuteWorkflowWorkflowResultEvent =
    | Vellum.ExecuteWorkflowWorkflowResultEvent.Fulfilled
    | Vellum.ExecuteWorkflowWorkflowResultEvent.Rejected;

export declare namespace ExecuteWorkflowWorkflowResultEvent {
    interface Fulfilled extends Vellum.FulfilledExecuteWorkflowWorkflowResultEvent {
        state: "FULFILLED";
    }

    interface Rejected extends Vellum.RejectedExecuteWorkflowWorkflowResultEvent {
        state: "REJECTED";
    }
}
