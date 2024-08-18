/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ChatMessageRequest } from "./ChatMessageRequest";

export const NamedTestCaseChatHistoryVariableValueRequest: core.serialization.ObjectSchema<
    serializers.NamedTestCaseChatHistoryVariableValueRequest.Raw,
    Vellum.NamedTestCaseChatHistoryVariableValueRequest
> = core.serialization.object({
    type: core.serialization.stringLiteral("CHAT_HISTORY"),
    value: core.serialization.list(ChatMessageRequest).optional(),
    name: core.serialization.string(),
});

export declare namespace NamedTestCaseChatHistoryVariableValueRequest {
    interface Raw {
        type: "CHAT_HISTORY";
        value?: ChatMessageRequest.Raw[] | null;
        name: string;
    }
}
