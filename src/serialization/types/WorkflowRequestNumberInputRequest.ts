/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const WorkflowRequestNumberInputRequest: core.serialization.ObjectSchema<
    serializers.WorkflowRequestNumberInputRequest.Raw,
    Vellum.WorkflowRequestNumberInputRequest
> = core.serialization.object({
    name: core.serialization.string(),
    value: core.serialization.number(),
});

export declare namespace WorkflowRequestNumberInputRequest {
    interface Raw {
        name: string;
        value: number;
    }
}
