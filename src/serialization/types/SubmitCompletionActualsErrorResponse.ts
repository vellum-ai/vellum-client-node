/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const SubmitCompletionActualsErrorResponse: core.serialization.ObjectSchema<
    serializers.SubmitCompletionActualsErrorResponse.Raw,
    Vellum.SubmitCompletionActualsErrorResponse
> = core.serialization.object({
    detail: core.serialization.string(),
});

export declare namespace SubmitCompletionActualsErrorResponse {
    interface Raw {
        detail: string;
    }
}