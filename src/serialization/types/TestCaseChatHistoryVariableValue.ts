/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ChatMessage } from "./ChatMessage";

export const TestCaseChatHistoryVariableValue: core.serialization.ObjectSchema<
    serializers.TestCaseChatHistoryVariableValue.Raw,
    Vellum.TestCaseChatHistoryVariableValue
> = core.serialization.object({
    variableId: core.serialization.property("variable_id", core.serialization.string()),
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("CHAT_HISTORY"),
    value: core.serialization.list(ChatMessage).optional(),
});

export declare namespace TestCaseChatHistoryVariableValue {
    interface Raw {
        variable_id: string;
        name: string;
        type: "CHAT_HISTORY";
        value?: ChatMessage.Raw[] | null;
    }
}
