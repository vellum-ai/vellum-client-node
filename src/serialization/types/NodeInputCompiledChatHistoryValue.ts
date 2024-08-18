/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ChatMessage } from "./ChatMessage";

export const NodeInputCompiledChatHistoryValue: core.serialization.ObjectSchema<
    serializers.NodeInputCompiledChatHistoryValue.Raw,
    Vellum.NodeInputCompiledChatHistoryValue
> = core.serialization.object({
    nodeInputId: core.serialization.property("node_input_id", core.serialization.string()),
    key: core.serialization.string(),
    type: core.serialization.stringLiteral("CHAT_HISTORY"),
    value: core.serialization.list(ChatMessage).optional(),
});

export declare namespace NodeInputCompiledChatHistoryValue {
    interface Raw {
        node_input_id: string;
        key: string;
        type: "CHAT_HISTORY";
        value?: ChatMessage.Raw[] | null;
    }
}
