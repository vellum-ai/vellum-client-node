/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A Function Call output returned from a Workflow execution.
 */
export interface WorkflowResultEventOutputDataFunctionCall {
    id?: string;
    name: string;
    state: Vellum.WorkflowNodeResultEventState;
    nodeId: string;
    /** The newly output string value. Only relevant for string outputs with a state of STREAMING. */
    delta?: string;
    type: "FUNCTION_CALL";
    value?: Vellum.FunctionCall;
}
