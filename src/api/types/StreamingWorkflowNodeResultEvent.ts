/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * An event that indicates that the node has execution is in progress.
 */
export interface StreamingWorkflowNodeResultEvent {
    id: string;
    nodeId: string;
    nodeResultId: string;
    state: "STREAMING";
    ts?: Date;
    data?: Vellum.WorkflowNodeResultData;
    sourceExecutionId?: string;
    output?: Vellum.NodeOutputCompiledValue;
    outputIndex?: number;
}
