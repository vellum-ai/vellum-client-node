/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * The properties of a ChatMessagePromptTemplateBlock
 */
export interface ChatMessagePromptBlockPropertiesRequest {
    blocks: Vellum.PromptBlockRequest[];
    chatRole?: Vellum.ChatMessageRole;
    chatSource?: string;
    chatMessageUnterminated?: boolean;
}