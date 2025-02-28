/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const WorkflowRequestJsonInputRequest: core.serialization.ObjectSchema<
    serializers.WorkflowRequestJsonInputRequest.Raw,
    Vellum.WorkflowRequestJsonInputRequest
> = core.serialization.object({
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("JSON"),
    value: core.serialization.unknown(),
});

export declare namespace WorkflowRequestJsonInputRequest {
    export interface Raw {
        name: string;
        type: "JSON";
        value?: unknown;
    }
}
