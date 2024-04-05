/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { ChatMessageRequest } from "./ChatMessageRequest";

export const ChatHistoryInputRequest: core.serialization.ObjectSchema<
    serializers.ChatHistoryInputRequest.Raw,
    Vellum.ChatHistoryInputRequest
> = core.serialization.object({
    name: core.serialization.string(),
    value: core.serialization.list(ChatMessageRequest),
});

export declare namespace ChatHistoryInputRequest {
    interface Raw {
        name: string;
        value: ChatMessageRequest.Raw[];
    }
}
