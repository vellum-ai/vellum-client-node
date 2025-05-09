/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ChatMessage } from "./ChatMessage";

export const CodeExecutionNodeChatHistoryResult: core.serialization.ObjectSchema<
    serializers.CodeExecutionNodeChatHistoryResult.Raw,
    Vellum.CodeExecutionNodeChatHistoryResult
> = core.serialization.object({
    id: core.serialization.string(),
    type: core.serialization.stringLiteral("CHAT_HISTORY"),
    value: core.serialization.list(ChatMessage).optionalNullable(),
});

export declare namespace CodeExecutionNodeChatHistoryResult {
    export interface Raw {
        id: string;
        type: "CHAT_HISTORY";
        value?: (ChatMessage.Raw[] | null) | null;
    }
}
