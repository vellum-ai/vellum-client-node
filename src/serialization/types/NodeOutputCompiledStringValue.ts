/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowNodeResultEventState } from "./WorkflowNodeResultEventState";

export const NodeOutputCompiledStringValue: core.serialization.ObjectSchema<
    serializers.NodeOutputCompiledStringValue.Raw,
    Vellum.NodeOutputCompiledStringValue
> = core.serialization.object({
    type: core.serialization.stringLiteral("STRING"),
    value: core.serialization.string().optional(),
    nodeOutputId: core.serialization.property("node_output_id", core.serialization.string()),
    state: WorkflowNodeResultEventState.optional(),
});

export declare namespace NodeOutputCompiledStringValue {
    interface Raw {
        type: "STRING";
        value?: string | null;
        node_output_id: string;
        state?: WorkflowNodeResultEventState.Raw | null;
    }
}
