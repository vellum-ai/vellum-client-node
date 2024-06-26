/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ArrayVellumValueItem } from "./ArrayVellumValueItem";
import { WorkflowNodeResultEventState } from "./WorkflowNodeResultEventState";

export const NodeOutputCompiledArrayValue: core.serialization.ObjectSchema<
    serializers.NodeOutputCompiledArrayValue.Raw,
    Vellum.NodeOutputCompiledArrayValue
> = core.serialization.object({
    value: core.serialization.list(ArrayVellumValueItem).optional(),
    nodeOutputId: core.serialization.property("node_output_id", core.serialization.string()),
    state: WorkflowNodeResultEventState.optional(),
});

export declare namespace NodeOutputCompiledArrayValue {
    interface Raw {
        value?: ArrayVellumValueItem.Raw[] | null;
        node_output_id: string;
        state?: WorkflowNodeResultEventState.Raw | null;
    }
}
