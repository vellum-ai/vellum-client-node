/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowNodeResultEventState } from "./WorkflowNodeResultEventState";
import { VellumError } from "./VellumError";

export const WorkflowResultEventOutputDataError: core.serialization.ObjectSchema<
    serializers.WorkflowResultEventOutputDataError.Raw,
    Vellum.WorkflowResultEventOutputDataError
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string(),
    state: WorkflowNodeResultEventState,
    nodeId: core.serialization.property("node_id", core.serialization.string()),
    delta: core.serialization.string().optional(),
    type: core.serialization.stringLiteral("ERROR"),
    value: VellumError.optional(),
});

export declare namespace WorkflowResultEventOutputDataError {
    interface Raw {
        id?: string | null;
        name: string;
        state: WorkflowNodeResultEventState.Raw;
        node_id: string;
        delta?: string | null;
        type: "ERROR";
        value?: VellumError.Raw | null;
    }
}
