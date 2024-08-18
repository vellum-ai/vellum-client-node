/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowRequestStringInputRequest } from "./WorkflowRequestStringInputRequest";
import { WorkflowRequestJsonInputRequest } from "./WorkflowRequestJsonInputRequest";
import { WorkflowRequestChatHistoryInputRequest } from "./WorkflowRequestChatHistoryInputRequest";
import { WorkflowRequestNumberInputRequest } from "./WorkflowRequestNumberInputRequest";

export const WorkflowRequestInputRequest: core.serialization.Schema<
    serializers.WorkflowRequestInputRequest.Raw,
    Vellum.WorkflowRequestInputRequest
> = core.serialization.undiscriminatedUnion([
    WorkflowRequestStringInputRequest,
    WorkflowRequestJsonInputRequest,
    WorkflowRequestChatHistoryInputRequest,
    WorkflowRequestNumberInputRequest,
]);

export declare namespace WorkflowRequestInputRequest {
    type Raw =
        | WorkflowRequestStringInputRequest.Raw
        | WorkflowRequestJsonInputRequest.Raw
        | WorkflowRequestChatHistoryInputRequest.Raw
        | WorkflowRequestNumberInputRequest.Raw;
}
