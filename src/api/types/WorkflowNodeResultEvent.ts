/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type WorkflowNodeResultEvent =
    | Vellum.InitiatedWorkflowNodeResultEvent
    | Vellum.StreamingWorkflowNodeResultEvent
    | Vellum.FulfilledWorkflowNodeResultEvent
    | Vellum.RejectedWorkflowNodeResultEvent;
