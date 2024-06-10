/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { ChatMessageRequest } from "./ChatMessageRequest";

export const NamedScenarioInputChatHistoryVariableValueRequest: core.serialization.ObjectSchema<
    serializers.NamedScenarioInputChatHistoryVariableValueRequest.Raw,
    Vellum.NamedScenarioInputChatHistoryVariableValueRequest
> = core.serialization.object({
    value: core.serialization.list(ChatMessageRequest).optional(),
    name: core.serialization.string(),
});

export declare namespace NamedScenarioInputChatHistoryVariableValueRequest {
    interface Raw {
        value?: ChatMessageRequest.Raw[] | null;
        name: string;
    }
}