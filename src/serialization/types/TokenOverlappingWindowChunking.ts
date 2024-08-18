/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { TokenOverlappingWindowChunkerConfig } from "./TokenOverlappingWindowChunkerConfig";

export const TokenOverlappingWindowChunking: core.serialization.ObjectSchema<
    serializers.TokenOverlappingWindowChunking.Raw,
    Vellum.TokenOverlappingWindowChunking
> = core.serialization.object({
    chunkerName: core.serialization.property(
        "chunker_name",
        core.serialization.stringLiteral("token-overlapping-window-chunker")
    ),
    chunkerConfig: core.serialization.property("chunker_config", TokenOverlappingWindowChunkerConfig.optional()),
});

export declare namespace TokenOverlappingWindowChunking {
    interface Raw {
        chunker_name: "token-overlapping-window-chunker";
        chunker_config?: TokenOverlappingWindowChunkerConfig.Raw | null;
    }
}
