/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TokenOverlappingWindowChunkerConfigRequest: core.serialization.ObjectSchema<
    serializers.TokenOverlappingWindowChunkerConfigRequest.Raw,
    Vellum.TokenOverlappingWindowChunkerConfigRequest
> = core.serialization.object({
    tokenLimit: core.serialization.property("token_limit", core.serialization.number().optional()),
    overlapRatio: core.serialization.property("overlap_ratio", core.serialization.number().optional()),
});

export declare namespace TokenOverlappingWindowChunkerConfigRequest {
    interface Raw {
        token_limit?: number | null;
        overlap_ratio?: number | null;
    }
}