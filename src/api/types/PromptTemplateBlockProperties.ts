/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface PromptTemplateBlockProperties {
    chatRole?: Vellum.ChatMessageRole;
    template?: string;
    blocks?: Record<string, unknown>[];
}