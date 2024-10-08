/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ChatMessage } from "./ChatMessage";

export const ChatHistoryVariableValue: core.serialization.ObjectSchema<
    serializers.ChatHistoryVariableValue.Raw,
    Vellum.ChatHistoryVariableValue
> = core.serialization.object({
    type: core.serialization.stringLiteral("CHAT_HISTORY"),
    value: core.serialization.list(ChatMessage).optional(),
});

export declare namespace ChatHistoryVariableValue {
    interface Raw {
        type: "CHAT_HISTORY";
        value?: ChatMessage.Raw[] | null;
    }
}
