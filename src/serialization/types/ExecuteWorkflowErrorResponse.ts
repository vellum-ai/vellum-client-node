/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const ExecuteWorkflowErrorResponse: core.serialization.ObjectSchema<
    serializers.ExecuteWorkflowErrorResponse.Raw,
    Vellum.ExecuteWorkflowErrorResponse
> = core.serialization.object({
    detail: core.serialization.string(),
});

export declare namespace ExecuteWorkflowErrorResponse {
    interface Raw {
        detail: string;
    }
}
