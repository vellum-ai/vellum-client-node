/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { PromptBlockState } from "./PromptBlockState";
import { EphemeralPromptCacheConfig } from "./EphemeralPromptCacheConfig";
import { JinjaPromptBlockProperties } from "./JinjaPromptBlockProperties";

export const JinjaPromptBlock: core.serialization.ObjectSchema<
    serializers.JinjaPromptBlock.Raw,
    Vellum.JinjaPromptBlock
> = core.serialization.object({
    state: PromptBlockState.optional(),
    cacheConfig: core.serialization.property("cache_config", EphemeralPromptCacheConfig.optional()),
    blockType: core.serialization.property("block_type", core.serialization.stringLiteral("JINJA")),
    properties: JinjaPromptBlockProperties,
});

export declare namespace JinjaPromptBlock {
    interface Raw {
        state?: PromptBlockState.Raw | null;
        cache_config?: EphemeralPromptCacheConfig.Raw | null;
        block_type: "JINJA";
        properties: JinjaPromptBlockProperties.Raw;
    }
}
