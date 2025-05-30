/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ChatMessage } from "./ChatMessage";

export const ScenarioInputChatHistoryVariableValue: core.serialization.ObjectSchema<
    serializers.ScenarioInputChatHistoryVariableValue.Raw,
    Vellum.ScenarioInputChatHistoryVariableValue
> = core.serialization.object({
    type: core.serialization.stringLiteral("CHAT_HISTORY"),
    value: core.serialization.list(ChatMessage).optionalNullable(),
    inputVariableId: core.serialization.property("input_variable_id", core.serialization.string()),
});

export declare namespace ScenarioInputChatHistoryVariableValue {
    export interface Raw {
        type: "CHAT_HISTORY";
        value?: (ChatMessage.Raw[] | null) | null;
        input_variable_id: string;
    }
}
