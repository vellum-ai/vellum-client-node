/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const PromptPushResponse: core.serialization.ObjectSchema<
    serializers.PromptPushResponse.Raw,
    Vellum.PromptPushResponse
> = core.serialization.object({
    promptVariantId: core.serialization.property("prompt_variant_id", core.serialization.string()),
    promptSandboxId: core.serialization.property("prompt_sandbox_id", core.serialization.string()),
});

export declare namespace PromptPushResponse {
    export interface Raw {
        prompt_variant_id: string;
        prompt_sandbox_id: string;
    }
}
