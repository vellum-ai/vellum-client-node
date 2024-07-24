/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowNodeResultEventState } from "./WorkflowNodeResultEventState";

export const WorkflowResultEventOutputDataJson: core.serialization.ObjectSchema<
    serializers.WorkflowResultEventOutputDataJson.Raw,
    Vellum.WorkflowResultEventOutputDataJson
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string(),
    state: WorkflowNodeResultEventState,
    nodeId: core.serialization.property("node_id", core.serialization.string()),
    delta: core.serialization.string().optional(),
    value: core.serialization.unknown(),
});

export declare namespace WorkflowResultEventOutputDataJson {
    interface Raw {
        id?: string | null;
        name: string;
        state: WorkflowNodeResultEventState.Raw;
        node_id: string;
        delta?: string | null;
        value?: unknown;
    }
}
