/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowNodeResultData } from "./WorkflowNodeResultData";
import { NodeInputVariableCompiledValue } from "./NodeInputVariableCompiledValue";

export const InitiatedWorkflowNodeResultEvent: core.serialization.ObjectSchema<
    serializers.InitiatedWorkflowNodeResultEvent.Raw,
    Vellum.InitiatedWorkflowNodeResultEvent
> = core.serialization.object({
    id: core.serialization.string(),
    nodeId: core.serialization.property("node_id", core.serialization.string()),
    nodeResultId: core.serialization.property("node_result_id", core.serialization.string()),
    state: core.serialization.stringLiteral("INITIATED"),
    ts: core.serialization.date().optional(),
    data: WorkflowNodeResultData.optional(),
    sourceExecutionId: core.serialization.property("source_execution_id", core.serialization.string().optional()),
    inputValues: core.serialization.property(
        "input_values",
        core.serialization.list(NodeInputVariableCompiledValue).optional(),
    ),
});

export declare namespace InitiatedWorkflowNodeResultEvent {
    export interface Raw {
        id: string;
        node_id: string;
        node_result_id: string;
        state: "INITIATED";
        ts?: string | null;
        data?: WorkflowNodeResultData.Raw | null;
        source_execution_id?: string | null;
        input_values?: NodeInputVariableCompiledValue.Raw[] | null;
    }
}
