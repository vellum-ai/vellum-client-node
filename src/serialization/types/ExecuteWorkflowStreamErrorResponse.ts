/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ExecuteWorkflowStreamErrorResponse: core.serialization.ObjectSchema<
    serializers.ExecuteWorkflowStreamErrorResponse.Raw,
    Vellum.ExecuteWorkflowStreamErrorResponse
> = core.serialization.object({
    detail: core.serialization.string(),
});

export declare namespace ExecuteWorkflowStreamErrorResponse {
    interface Raw {
        detail: string;
    }
}
