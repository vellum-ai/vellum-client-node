/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const EnrichedNormalizedCompletion: core.serialization.ObjectSchema<
    serializers.EnrichedNormalizedCompletion.Raw,
    Vellum.EnrichedNormalizedCompletion
> = core.serialization.object({
    id: core.serialization.string(),
    externalId: core.serialization.property("external_id", core.serialization.string().optional()),
    text: core.serialization.string(),
    finishReason: core.serialization.property(
        "finish_reason",
        core.serialization.lazy(async () => (await import("..")).FinishReasonEnum).optional()
    ),
    logprobs: core.serialization.lazyObject(async () => (await import("..")).NormalizedLogProbs).optional(),
    modelVersionId: core.serialization.property("model_version_id", core.serialization.string()),
    promptVersionId: core.serialization.property("prompt_version_id", core.serialization.string().optional()),
    type: core.serialization.lazy(async () => (await import("..")).VellumVariableType).optional(),
});

export declare namespace EnrichedNormalizedCompletion {
    interface Raw {
        id: string;
        external_id?: string | null;
        text: string;
        finish_reason?: serializers.FinishReasonEnum.Raw | null;
        logprobs?: serializers.NormalizedLogProbs.Raw | null;
        model_version_id: string;
        prompt_version_id?: string | null;
        type?: serializers.VellumVariableType.Raw | null;
    }
}
