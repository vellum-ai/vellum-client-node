/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ChatMessageRequest } from "./ChatMessageRequest";

export const WorkflowRequestChatHistoryInputRequest: core.serialization.ObjectSchema<
    serializers.WorkflowRequestChatHistoryInputRequest.Raw,
    Vellum.WorkflowRequestChatHistoryInputRequest
> = core.serialization.object({
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("CHAT_HISTORY"),
    value: core.serialization.list(ChatMessageRequest),
});

export declare namespace WorkflowRequestChatHistoryInputRequest {
    interface Raw {
        name: string;
        type: "CHAT_HISTORY";
        value: ChatMessageRequest.Raw[];
    }
}
