/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowExecutionActualStringRequest } from "./WorkflowExecutionActualStringRequest";
import { WorkflowExecutionActualJsonRequest } from "./WorkflowExecutionActualJsonRequest";
import { WorkflowExecutionActualChatHistoryRequest } from "./WorkflowExecutionActualChatHistoryRequest";

export const SubmitWorkflowExecutionActualRequest: core.serialization.Schema<
    serializers.SubmitWorkflowExecutionActualRequest.Raw,
    Vellum.SubmitWorkflowExecutionActualRequest
> = core.serialization.undiscriminatedUnion([
    WorkflowExecutionActualStringRequest,
    WorkflowExecutionActualJsonRequest,
    WorkflowExecutionActualChatHistoryRequest,
]);

export declare namespace SubmitWorkflowExecutionActualRequest {
    type Raw =
        | WorkflowExecutionActualStringRequest.Raw
        | WorkflowExecutionActualJsonRequest.Raw
        | WorkflowExecutionActualChatHistoryRequest.Raw;
}
