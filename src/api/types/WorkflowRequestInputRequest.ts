/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export type WorkflowRequestInputRequest =
    | Vellum.WorkflowRequestInputRequest.String
    | Vellum.WorkflowRequestInputRequest.Json
    | Vellum.WorkflowRequestInputRequest.ChatHistory
    | Vellum.WorkflowRequestInputRequest.Number;

export declare namespace WorkflowRequestInputRequest {
    interface String extends Vellum.WorkflowRequestStringInputRequest {
        type: "STRING";
    }

    interface Json extends Vellum.WorkflowRequestJsonInputRequest {
        type: "JSON";
    }

    interface ChatHistory extends Vellum.WorkflowRequestChatHistoryInputRequest {
        type: "CHAT_HISTORY";
    }

    interface Number extends Vellum.WorkflowRequestNumberInputRequest {
        type: "NUMBER";
    }
}
