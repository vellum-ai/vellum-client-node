/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const WorkflowResultEventOutputDataError: core.serialization.ObjectSchema<
    serializers.WorkflowResultEventOutputDataError.Raw,
    Vellum.WorkflowResultEventOutputDataError
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string(),
    state: core.serialization.lazy(async () => (await import("..")).WorkflowNodeResultEventState),
    nodeId: core.serialization.property("node_id", core.serialization.string()),
    delta: core.serialization.string().optional(),
    value: core.serialization.lazyObject(async () => (await import("..")).VellumError).optional(),
});

export declare namespace WorkflowResultEventOutputDataError {
    interface Raw {
        id?: string | null;
        name: string;
        state: serializers.WorkflowNodeResultEventState.Raw;
        node_id: string;
        delta?: string | null;
        value?: serializers.VellumError.Raw | null;
    }
}
