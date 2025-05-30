/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * An event that indicates that the node has initiated its execution.
 */
export interface InitiatedWorkflowNodeResultEvent {
    id: string;
    nodeId: string;
    nodeResultId: string;
    state: "INITIATED";
    ts?: Date | null;
    data?: Vellum.WorkflowNodeResultData | null;
    sourceExecutionId?: string | null;
    inputValues?: Vellum.NodeInputVariableCompiledValue[] | null;
}
