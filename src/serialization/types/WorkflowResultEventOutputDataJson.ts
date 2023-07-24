/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const WorkflowResultEventOutputDataJson: core.serialization.ObjectSchema<
    serializers.WorkflowResultEventOutputDataJson.Raw,
    Vellum.WorkflowResultEventOutputDataJson
> = core.serialization.object({
    name: core.serialization.string(),
    state: core.serialization.lazy(async () => (await import("..")).WorkflowNodeResultEventState),
    nodeId: core.serialization.property("node_id", core.serialization.string()),
    delta: core.serialization.string().optional(),
    value: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace WorkflowResultEventOutputDataJson {
    interface Raw {
        name: string;
        state: serializers.WorkflowNodeResultEventState.Raw;
        node_id: string;
        delta?: string | null;
        value?: Record<string, unknown> | null;
    }
}
