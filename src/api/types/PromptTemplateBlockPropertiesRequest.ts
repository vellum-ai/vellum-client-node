/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface PromptTemplateBlockPropertiesRequest {
    chatRole?: Vellum.ChatMessageRole;
    chatMessageUnterminated?: boolean;
    chatSource?: string;
    template?: string;
    templateType?: Vellum.VellumVariableType;
    functionName?: string;
    functionDescription?: string;
    functionParameters?: Record<string, unknown>;
    functionForced?: boolean;
    blocks?: Vellum.PromptTemplateBlockRequest[];
}
