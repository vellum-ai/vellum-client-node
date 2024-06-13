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
> = core.serialization
    .union(core.serialization.discriminant("outputType", "output_type"), {
        STRING: WorkflowExecutionActualStringRequest,
        JSON: WorkflowExecutionActualJsonRequest,
        CHAT_HISTORY: WorkflowExecutionActualChatHistoryRequest,
    })
    .transform<Vellum.SubmitWorkflowExecutionActualRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace SubmitWorkflowExecutionActualRequest {
    type Raw =
        | SubmitWorkflowExecutionActualRequest.String
        | SubmitWorkflowExecutionActualRequest.Json
        | SubmitWorkflowExecutionActualRequest.ChatHistory;

    interface String extends WorkflowExecutionActualStringRequest.Raw {
        output_type: "STRING";
    }

    interface Json extends WorkflowExecutionActualJsonRequest.Raw {
        output_type: "JSON";
    }

    interface ChatHistory extends WorkflowExecutionActualChatHistoryRequest.Raw {
        output_type: "CHAT_HISTORY";
    }
}
