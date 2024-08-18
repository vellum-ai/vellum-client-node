/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FulfilledExecuteWorkflowWorkflowResultEvent } from "./FulfilledExecuteWorkflowWorkflowResultEvent";
import { RejectedExecuteWorkflowWorkflowResultEvent } from "./RejectedExecuteWorkflowWorkflowResultEvent";

export const ExecuteWorkflowWorkflowResultEvent: core.serialization.Schema<
    serializers.ExecuteWorkflowWorkflowResultEvent.Raw,
    Vellum.ExecuteWorkflowWorkflowResultEvent
> = core.serialization.undiscriminatedUnion([
    FulfilledExecuteWorkflowWorkflowResultEvent,
    RejectedExecuteWorkflowWorkflowResultEvent,
]);

export declare namespace ExecuteWorkflowWorkflowResultEvent {
    type Raw = FulfilledExecuteWorkflowWorkflowResultEvent.Raw | RejectedExecuteWorkflowWorkflowResultEvent.Raw;
}
