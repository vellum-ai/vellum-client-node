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
    id: core.serialization.string().optionalNullable(),
    name: core.serialization.string(),
    state: WorkflowNodeResultEventState,
    nodeId: core.serialization.property("node_id", core.serialization.string()),
    delta: core.serialization.string().optionalNullable(),
    type: core.serialization.stringLiteral("CHAT_HISTORY"),
    value: core.serialization.list(ChatMessage).optionalNullable(),
});

export declare namespace WorkflowResultEventOutputDataChatHistory {
    export interface Raw {
        id?: (string | null) | null;
        name: string;
        state: WorkflowNodeResultEventState.Raw;
        node_id: string;
        delta?: (string | null) | null;
        type: "CHAT_HISTORY";
        value?: (ChatMessage.Raw[] | null) | null;
    }
}
