/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const WorkflowResultEventOutputDataChatHistory: core.serialization.ObjectSchema<
    serializers.WorkflowResultEventOutputDataChatHistory.Raw,
    Vellum.WorkflowResultEventOutputDataChatHistory
> = core.serialization.object({
    name: core.serialization.string(),
    state: core.serialization.lazy(async () => (await import("..")).WorkflowNodeResultEventState),
    nodeId: core.serialization.property("node_id", core.serialization.string()),
    value: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).ChatMessage))
        .optional(),
});

export declare namespace WorkflowResultEventOutputDataChatHistory {
    interface Raw {
        name: string;
        state: serializers.WorkflowNodeResultEventState.Raw;
        node_id: string;
        value?: serializers.ChatMessage.Raw[] | null;
    }
}