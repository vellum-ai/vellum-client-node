/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ModelVersionExecConfigParameters: core.serialization.ObjectSchema<
    serializers.ModelVersionExecConfigParameters.Raw,
    Vellum.ModelVersionExecConfigParameters
> = core.serialization.object({
    temperature: core.serialization.number().optional(),
    maxTokens: core.serialization.property("max_tokens", core.serialization.number().optional()),
    topP: core.serialization.property("top_p", core.serialization.number()),
    frequencyPenalty: core.serialization.property("frequency_penalty", core.serialization.number()),
    presencePenalty: core.serialization.property("presence_penalty", core.serialization.number()),
    logitBias: core.serialization.property(
        "logit_bias",
        core.serialization.record(core.serialization.string(), core.serialization.number().optional()).optional()
    ),
    stop: core.serialization.list(core.serialization.string()).optional(),
    topK: core.serialization.property("top_k", core.serialization.number().optional()),
});

export declare namespace ModelVersionExecConfigParameters {
    interface Raw {
        temperature?: number | null;
        max_tokens?: number | null;
        top_p: number;
        frequency_penalty: number;
        presence_penalty: number;
        logit_bias?: Record<string, number | null | undefined> | null;
        stop?: string[] | null;
        top_k?: number | null;
    }
}
