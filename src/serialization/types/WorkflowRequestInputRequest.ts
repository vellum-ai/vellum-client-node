/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { WorkflowRequestStringInputRequest } from "./WorkflowRequestStringInputRequest";
import { WorkflowRequestJsonInputRequest } from "./WorkflowRequestJsonInputRequest";
import { WorkflowRequestChatHistoryInputRequest } from "./WorkflowRequestChatHistoryInputRequest";
import { WorkflowRequestNumberInputRequest } from "./WorkflowRequestNumberInputRequest";

export const WorkflowRequestInputRequest: core.serialization.Schema<
    serializers.WorkflowRequestInputRequest.Raw,
    Vellum.WorkflowRequestInputRequest
> = core.serialization
    .union("type", {
        STRING: WorkflowRequestStringInputRequest,
        JSON: WorkflowRequestJsonInputRequest,
        CHAT_HISTORY: WorkflowRequestChatHistoryInputRequest,
        NUMBER: WorkflowRequestNumberInputRequest,
    })
    .transform<Vellum.WorkflowRequestInputRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace WorkflowRequestInputRequest {
    type Raw =
        | WorkflowRequestInputRequest.String
        | WorkflowRequestInputRequest.Json
        | WorkflowRequestInputRequest.ChatHistory
        | WorkflowRequestInputRequest.Number;

    interface String extends WorkflowRequestStringInputRequest.Raw {
        type: "STRING";
    }

    interface Json extends WorkflowRequestJsonInputRequest.Raw {
        type: "JSON";
    }

    interface ChatHistory extends WorkflowRequestChatHistoryInputRequest.Raw {
        type: "CHAT_HISTORY";
    }

    interface Number extends WorkflowRequestNumberInputRequest.Raw {
        type: "NUMBER";
    }
}
