/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ChatMessageRequest } from "./ChatMessageRequest";

export const NamedScenarioInputChatHistoryVariableValueRequest: core.serialization.ObjectSchema<
    serializers.NamedScenarioInputChatHistoryVariableValueRequest.Raw,
    Vellum.NamedScenarioInputChatHistoryVariableValueRequest
> = core.serialization.object({
    type: core.serialization.stringLiteral("CHAT_HISTORY"),
    value: core.serialization.list(ChatMessageRequest).optional(),
    name: core.serialization.string(),
});

export declare namespace NamedScenarioInputChatHistoryVariableValueRequest {
    interface Raw {
        type: "CHAT_HISTORY";
        value?: ChatMessageRequest.Raw[] | null;
        name: string;
    }
}
