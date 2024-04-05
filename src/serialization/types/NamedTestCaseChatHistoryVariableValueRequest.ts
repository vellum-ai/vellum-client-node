/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { ChatMessageRequest } from "./ChatMessageRequest";

export const NamedTestCaseChatHistoryVariableValueRequest: core.serialization.ObjectSchema<
    serializers.NamedTestCaseChatHistoryVariableValueRequest.Raw,
    Vellum.NamedTestCaseChatHistoryVariableValueRequest
> = core.serialization.object({
    name: core.serialization.string(),
    value: core.serialization.list(ChatMessageRequest).optional(),
});

export declare namespace NamedTestCaseChatHistoryVariableValueRequest {
    interface Raw {
        name: string;
        value?: ChatMessageRequest.Raw[] | null;
    }
}
