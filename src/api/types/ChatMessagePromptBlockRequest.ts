/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A block that represents a chat message in a prompt template.
 */
export interface ChatMessagePromptBlockRequest {
    blockType: "CHAT_MESSAGE";
    properties: Vellum.ChatMessagePromptBlockPropertiesRequest;
    id: string;
    state?: Vellum.PromptBlockState;
    cacheConfig?: Vellum.EphemeralPromptCacheConfigRequest;
}
