/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { PromptBlockState } from "./PromptBlockState";
import { EphemeralPromptCacheConfig } from "./EphemeralPromptCacheConfig";
import { ChatMessageRole } from "./ChatMessageRole";

export const ChatMessagePromptBlock: core.serialization.ObjectSchema<
    serializers.ChatMessagePromptBlock.Raw,
    Vellum.ChatMessagePromptBlock
> = core.serialization.object({
    blockType: core.serialization.property("block_type", core.serialization.stringLiteral("CHAT_MESSAGE")),
    state: PromptBlockState.optional(),
    cacheConfig: core.serialization.property("cache_config", EphemeralPromptCacheConfig.optional()),
    chatRole: core.serialization.property("chat_role", ChatMessageRole),
    chatSource: core.serialization.property("chat_source", core.serialization.string().optional()),
    chatMessageUnterminated: core.serialization.property(
        "chat_message_unterminated",
        core.serialization.boolean().optional(),
    ),
    blocks: core.serialization.list(core.serialization.lazy(() => serializers.PromptBlock)),
});

export declare namespace ChatMessagePromptBlock {
    export interface Raw {
        block_type: "CHAT_MESSAGE";
        state?: PromptBlockState.Raw | null;
        cache_config?: EphemeralPromptCacheConfig.Raw | null;
        chat_role: ChatMessageRole.Raw;
        chat_source?: string | null;
        chat_message_unterminated?: boolean | null;
        blocks: serializers.PromptBlock.Raw[];
    }
}
