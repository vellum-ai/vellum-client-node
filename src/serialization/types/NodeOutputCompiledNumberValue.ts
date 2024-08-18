/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowNodeResultEventState } from "./WorkflowNodeResultEventState";

export const NodeOutputCompiledNumberValue: core.serialization.ObjectSchema<
    serializers.NodeOutputCompiledNumberValue.Raw,
    Vellum.NodeOutputCompiledNumberValue
> = core.serialization.object({
    type: core.serialization.stringLiteral("NUMBER"),
    value: core.serialization.number().optional(),
    nodeOutputId: core.serialization.property("node_output_id", core.serialization.string()),
    state: WorkflowNodeResultEventState.optional(),
});

export declare namespace NodeOutputCompiledNumberValue {
    interface Raw {
        type: "NUMBER";
        value?: number | null;
        node_output_id: string;
        state?: WorkflowNodeResultEventState.Raw | null;
    }
}
