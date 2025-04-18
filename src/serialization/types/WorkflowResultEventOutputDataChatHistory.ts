/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowNodeResultEventState } from "./WorkflowNodeResultEventState";
import { ChatMessage } from "./ChatMessage";

export const WorkflowResultEventOutputDataChatHistory: core.serialization.ObjectSchema<
    serializers.WorkflowResultEventOutputDataChatHistory.Raw,
    Vellum.WorkflowResultEventOutputDataChatHistory
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string(),
    state: WorkflowNodeResultEventState,
    nodeId: core.serialization.property("node_id", core.serialization.string()),
    delta: core.serialization.string().optional(),
    type: core.serialization.stringLiteral("CHAT_HISTORY"),
    value: core.serialization.list(ChatMessage).optional(),
});

export declare namespace WorkflowResultEventOutputDataChatHistory {
    export interface Raw {
        id?: string | null;
        name: string;
        state: WorkflowNodeResultEventState.Raw;
        node_id: string;
        delta?: string | null;
        type: "CHAT_HISTORY";
        value?: ChatMessage.Raw[] | null;
    }
}
