/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The input for a number variable in a Workflow.
 */
export interface WorkflowRequestNumberInputRequest {
    /** The variable's name, as defined in the Workflow. */
    name: string;
    type: "NUMBER";
    value: number;
}
