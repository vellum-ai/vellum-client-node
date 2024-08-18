/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ChatMessage } from "./ChatMessage";

export const TerminalNodeChatHistoryResult: core.serialization.ObjectSchema<
    serializers.TerminalNodeChatHistoryResult.Raw,
    Vellum.TerminalNodeChatHistoryResult
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("CHAT_HISTORY"),
    value: core.serialization.list(ChatMessage).optional(),
});

export declare namespace TerminalNodeChatHistoryResult {
    interface Raw {
        id?: string | null;
        name: string;
        type: "CHAT_HISTORY";
        value?: ChatMessage.Raw[] | null;
    }
}
