/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * An event that indicates that the node has fulfilled its execution.
 */
export interface FulfilledWorkflowNodeResultEvent {
    id: string;
    nodeId: string;
    nodeResultId: string;
    state: "FULFILLED";
    ts?: Date;
    data?: Vellum.WorkflowNodeResultData;
    sourceExecutionId?: string;
    outputValues: Vellum.NodeOutputCompiledValue[];
    mocked?: boolean;
}
