/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const CodeExecutionNodeChatHistoryResult: core.serialization.ObjectSchema<
    serializers.CodeExecutionNodeChatHistoryResult.Raw,
    Vellum.CodeExecutionNodeChatHistoryResult
> = core.serialization.object({
    id: core.serialization.string(),
    value: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).ChatMessage))
        .optional(),
});

export declare namespace CodeExecutionNodeChatHistoryResult {
    interface Raw {
        id: string;
        value?: serializers.ChatMessage.Raw[] | null;
    }
}
