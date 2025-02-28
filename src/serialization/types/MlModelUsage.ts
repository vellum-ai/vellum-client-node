/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const MlModelUsage: core.serialization.ObjectSchema<serializers.MlModelUsage.Raw, Vellum.MlModelUsage> =
    core.serialization.object({
        outputTokenCount: core.serialization.property("output_token_count", core.serialization.number().optional()),
        inputTokenCount: core.serialization.property("input_token_count", core.serialization.number().optional()),
        inputCharCount: core.serialization.property("input_char_count", core.serialization.number().optional()),
        outputCharCount: core.serialization.property("output_char_count", core.serialization.number().optional()),
        computeNanos: core.serialization.property("compute_nanos", core.serialization.number().optional()),
        cacheCreationInputTokens: core.serialization.property(
            "cache_creation_input_tokens",
            core.serialization.number().optional(),
        ),
        cacheReadInputTokens: core.serialization.property(
            "cache_read_input_tokens",
            core.serialization.number().optional(),
        ),
    });

export declare namespace MlModelUsage {
    export interface Raw {
        output_token_count?: number | null;
        input_token_count?: number | null;
        input_char_count?: number | null;
        output_char_count?: number | null;
        compute_nanos?: number | null;
        cache_creation_input_tokens?: number | null;
        cache_read_input_tokens?: number | null;
    }
}
