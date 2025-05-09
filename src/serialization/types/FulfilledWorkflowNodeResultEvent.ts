/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowNodeResultData } from "./WorkflowNodeResultData";
import { NodeOutputCompiledValue } from "./NodeOutputCompiledValue";

export const FulfilledWorkflowNodeResultEvent: core.serialization.ObjectSchema<
    serializers.FulfilledWorkflowNodeResultEvent.Raw,
    Vellum.FulfilledWorkflowNodeResultEvent
> = core.serialization.object({
    id: core.serialization.string(),
    nodeId: core.serialization.property("node_id", core.serialization.string()),
    nodeResultId: core.serialization.property("node_result_id", core.serialization.string()),
    state: core.serialization.stringLiteral("FULFILLED"),
    ts: core.serialization.date().optionalNullable(),
    data: WorkflowNodeResultData.optionalNullable(),
    sourceExecutionId: core.serialization.property(
        "source_execution_id",
        core.serialization.string().optionalNullable(),
    ),
    outputValues: core.serialization.property("output_values", core.serialization.list(NodeOutputCompiledValue)),
    mocked: core.serialization.boolean().optional(),
});

export declare namespace FulfilledWorkflowNodeResultEvent {
    export interface Raw {
        id: string;
        node_id: string;
        node_result_id: string;
        state: "FULFILLED";
        ts?: (string | null) | null;
        data?: (WorkflowNodeResultData.Raw | null) | null;
        source_execution_id?: (string | null) | null;
        output_values: NodeOutputCompiledValue.Raw[];
        mocked?: boolean | null;
    }
}
