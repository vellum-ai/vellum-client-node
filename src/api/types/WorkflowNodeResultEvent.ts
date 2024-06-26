/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type WorkflowNodeResultEvent =
    | Vellum.WorkflowNodeResultEvent.Initiated
    | Vellum.WorkflowNodeResultEvent.Streaming
    | Vellum.WorkflowNodeResultEvent.Fulfilled
    | Vellum.WorkflowNodeResultEvent.Rejected;

export declare namespace WorkflowNodeResultEvent {
    interface Initiated extends Vellum.InitiatedWorkflowNodeResultEvent {
        state: "INITIATED";
    }

    interface Streaming extends Vellum.StreamingWorkflowNodeResultEvent {
        state: "STREAMING";
    }

    interface Fulfilled extends Vellum.FulfilledWorkflowNodeResultEvent {
        state: "FULFILLED";
    }

    interface Rejected extends Vellum.RejectedWorkflowNodeResultEvent {
        state: "REJECTED";
    }
}
