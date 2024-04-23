/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

/**
 * A block of that represents a chat history variable in a prompt template.
 */
export interface ChatHistoryPromptTemplateBlockRequest {
    properties: Record<string, unknown>;
    id: string;
    state?: Vellum.PromptTemplateBlockState;
}
