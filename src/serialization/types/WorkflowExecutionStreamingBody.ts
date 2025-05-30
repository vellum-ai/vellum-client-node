/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumCodeResourceDefinition } from "./VellumCodeResourceDefinition";
import { BaseOutput } from "./BaseOutput";

export const WorkflowExecutionStreamingBody: core.serialization.ObjectSchema<
    serializers.WorkflowExecutionStreamingBody.Raw,
    Vellum.WorkflowExecutionStreamingBody
> = core.serialization.object({
    workflowDefinition: core.serialization.property("workflow_definition", VellumCodeResourceDefinition),
    output: BaseOutput,
});

export declare namespace WorkflowExecutionStreamingBody {
    export interface Raw {
        workflow_definition: VellumCodeResourceDefinition.Raw;
        output: BaseOutput.Raw;
    }
}
