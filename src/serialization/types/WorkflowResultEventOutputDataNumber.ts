/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowNodeResultEventState } from "./WorkflowNodeResultEventState";

export const WorkflowResultEventOutputDataNumber: core.serialization.ObjectSchema<
    serializers.WorkflowResultEventOutputDataNumber.Raw,
    Vellum.WorkflowResultEventOutputDataNumber
> = core.serialization.object({
    id: core.serialization.string().optionalNullable(),
    name: core.serialization.string(),
    state: WorkflowNodeResultEventState,
    nodeId: core.serialization.property("node_id", core.serialization.string()),
    delta: core.serialization.string().optionalNullable(),
    type: core.serialization.stringLiteral("NUMBER"),
    value: core.serialization.number().optionalNullable(),
});

export declare namespace WorkflowResultEventOutputDataNumber {
    export interface Raw {
        id?: (string | null) | null;
        name: string;
        state: WorkflowNodeResultEventState.Raw;
        node_id: string;
        delta?: (string | null) | null;
        type: "NUMBER";
        value?: (number | null) | null;
    }
}
