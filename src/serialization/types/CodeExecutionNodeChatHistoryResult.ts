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
    value: core.serialization.list(ChatMessage).optional(),
});

export declare namespace CodeExecutionNodeChatHistoryResult {
    interface Raw {
        id: string;
        value?: ChatMessage.Raw[] | null;
    }
}
