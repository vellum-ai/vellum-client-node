/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const WorkflowRequestStringInputRequest: core.serialization.ObjectSchema<
    serializers.WorkflowRequestStringInputRequest.Raw,
    Vellum.WorkflowRequestStringInputRequest
> = core.serialization.object({
    name: core.serialization.string(),
    value: core.serialization.string(),
});

export declare namespace WorkflowRequestStringInputRequest {
    interface Raw {
        name: string;
        value: string;
    }
}