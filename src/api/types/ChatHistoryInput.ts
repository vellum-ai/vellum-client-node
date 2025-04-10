/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A user input representing a list of chat messages
 */
export interface ChatHistoryInput {
    /** The variable's name, as defined in the deployment. */
    name: string;
    type: "CHAT_HISTORY";
    value: Vellum.ChatMessage[];
}
