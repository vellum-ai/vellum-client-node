/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const RegisterPromptErrorResponse: core.serialization.ObjectSchema<
    serializers.RegisterPromptErrorResponse.Raw,
    Vellum.RegisterPromptErrorResponse
> = core.serialization.object({
    detail: core.serialization.string(),
});

export declare namespace RegisterPromptErrorResponse {
    interface Raw {
        detail: string;
    }
}
