/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface PromptRequestChatHistoryInput {
    /** The variable's name, as defined in the Prompt. */
    key: string;
    type: "CHAT_HISTORY";
    value: Vellum.ChatMessage[];
}
