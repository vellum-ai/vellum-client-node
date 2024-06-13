/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A function call output from a Workflow execution.
 */
export interface WorkflowOutputFunctionCall {
    id: string;
    /** The output's name, as defined in the workflow */
    name: string;
    value?: Vellum.FunctionCall;
}
