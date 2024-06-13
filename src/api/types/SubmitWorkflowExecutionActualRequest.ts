/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type SubmitWorkflowExecutionActualRequest =
    | Vellum.SubmitWorkflowExecutionActualRequest.String
    | Vellum.SubmitWorkflowExecutionActualRequest.Json
    | Vellum.SubmitWorkflowExecutionActualRequest.ChatHistory;

export declare namespace SubmitWorkflowExecutionActualRequest {
    interface String extends Vellum.WorkflowExecutionActualStringRequest {
        outputType: "STRING";
    }

    interface Json extends Vellum.WorkflowExecutionActualJsonRequest {
        outputType: "JSON";
    }

    interface ChatHistory extends Vellum.WorkflowExecutionActualChatHistoryRequest {
        outputType: "CHAT_HISTORY";
    }
}
