/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A JSON output from a Workflow execution.
 */
export interface WorkflowOutputJson {
    id: string;
    /** The output's name, as defined in the workflow */
    name: string;
    type: "JSON";
    value?: unknown;
}
