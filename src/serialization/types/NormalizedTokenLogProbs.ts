/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { VellumApi } from "@fern-api/vellum";
import * as core from "../../core";

export const NormalizedTokenLogProbs: core.serialization.ObjectSchema<
    serializers.NormalizedTokenLogProbs.Raw,
    VellumApi.NormalizedTokenLogProbs
> = core.serialization.object({
    token: core.serialization.string(),
    logprob: core.serialization.number().optional(),
    topLogprobs: core.serialization.property(
        "top_logprobs",
        core.serialization.record(core.serialization.string(), core.serialization.number()).optional()
    ),
    textOffset: core.serialization.property("text_offset", core.serialization.number()),
});

export declare namespace NormalizedTokenLogProbs {
    interface Raw {
        token: string;
        logprob?: number | null;
        top_logprobs?: Record<string, number> | null;
        text_offset: number;
    }
}
