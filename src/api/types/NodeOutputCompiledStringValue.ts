/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

/**
 * An output returned by a node that is of type STRING.
 */
export interface NodeOutputCompiledStringValue {
    value?: string;
    nodeOutputId: string;
    state?: Vellum.WorkflowNodeResultEventState;
}
