/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TokenOverlappingWindowChunkerConfig: core.serialization.ObjectSchema<
    serializers.TokenOverlappingWindowChunkerConfig.Raw,
    Vellum.TokenOverlappingWindowChunkerConfig
> = core.serialization.object({
    tokenLimit: core.serialization.property("token_limit", core.serialization.number().optional()),
    overlapRatio: core.serialization.property("overlap_ratio", core.serialization.number().optional()),
});

export declare namespace TokenOverlappingWindowChunkerConfig {
    interface Raw {
        token_limit?: number | null;
        overlap_ratio?: number | null;
    }
}
