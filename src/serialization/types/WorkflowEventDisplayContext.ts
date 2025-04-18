/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const WorkflowEventDisplayContext: core.serialization.ObjectSchema<
    serializers.WorkflowEventDisplayContext.Raw,
    Vellum.WorkflowEventDisplayContext
> = core.serialization.object({
    nodeDisplays: core.serialization.property(
        "node_displays",
        core.serialization.record(
            core.serialization.string(),
            core.serialization.lazyObject(() => serializers.NodeEventDisplayContext),
        ),
    ),
    workflowInputs: core.serialization.property(
        "workflow_inputs",
        core.serialization.record(core.serialization.string(), core.serialization.string()),
    ),
    workflowOutputs: core.serialization.property(
        "workflow_outputs",
        core.serialization.record(core.serialization.string(), core.serialization.string()),
    ),
});

export declare namespace WorkflowEventDisplayContext {
    export interface Raw {
        node_displays: Record<string, serializers.NodeEventDisplayContext.Raw>;
        workflow_inputs: Record<string, string>;
        workflow_outputs: Record<string, string>;
    }
}
