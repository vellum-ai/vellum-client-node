/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface ChatMessageRequest {
    text?: string;
    role: Vellum.ChatMessageRole;
    content?: Vellum.ChatMessageContentRequest;
    /** An optional identifier representing who or what generated this message. */
    source?: string;
}
