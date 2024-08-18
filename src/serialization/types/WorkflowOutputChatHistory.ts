/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ChatMessage } from "./ChatMessage";

export const WorkflowOutputChatHistory: core.serialization.ObjectSchema<
    serializers.WorkflowOutputChatHistory.Raw,
    Vellum.WorkflowOutputChatHistory
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("CHAT_HISTORY"),
    value: core.serialization.list(ChatMessage).optional(),
});

export declare namespace WorkflowOutputChatHistory {
    interface Raw {
        id: string;
        name: string;
        type: "CHAT_HISTORY";
        value?: ChatMessage.Raw[] | null;
    }
}
