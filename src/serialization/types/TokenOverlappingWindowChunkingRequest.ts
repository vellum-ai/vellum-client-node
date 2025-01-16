/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { TokenOverlappingWindowChunkerConfigRequest } from "./TokenOverlappingWindowChunkerConfigRequest";

export const TokenOverlappingWindowChunkingRequest: core.serialization.ObjectSchema<
    serializers.TokenOverlappingWindowChunkingRequest.Raw,
    Vellum.TokenOverlappingWindowChunkingRequest
> = core.serialization.object({
    chunkerName: core.serialization.property(
        "chunker_name",
        core.serialization.stringLiteral("token-overlapping-window-chunker"),
    ),
    chunkerConfig: core.serialization.property("chunker_config", TokenOverlappingWindowChunkerConfigRequest.optional()),
});

export declare namespace TokenOverlappingWindowChunkingRequest {
    export interface Raw {
        chunker_name: "token-overlapping-window-chunker";
        chunker_config?: TokenOverlappingWindowChunkerConfigRequest.Raw | null;
    }
}
