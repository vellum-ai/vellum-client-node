/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

/**
 * An array output from a Workflow execution.
 */
export interface WorkflowOutputArray {
    id: string;
    /** The output's name, as defined in the workflow */
    name: string;
    value?: Vellum.ArrayVariableValueItem[];
}
