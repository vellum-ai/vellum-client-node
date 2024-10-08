/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { JinjaPromptBlockPropertiesRequest } from "./JinjaPromptBlockPropertiesRequest";
import { PromptBlockState } from "./PromptBlockState";
import { EphemeralPromptCacheConfigRequest } from "./EphemeralPromptCacheConfigRequest";

export const JinjaPromptBlockRequest: core.serialization.ObjectSchema<
    serializers.JinjaPromptBlockRequest.Raw,
    Vellum.JinjaPromptBlockRequest
> = core.serialization.object({
    blockType: core.serialization.property("block_type", core.serialization.stringLiteral("JINJA")),
    properties: JinjaPromptBlockPropertiesRequest,
    id: core.serialization.string(),
    state: PromptBlockState.optional(),
    cacheConfig: core.serialization.property("cache_config", EphemeralPromptCacheConfigRequest.optional()),
});

export declare namespace JinjaPromptBlockRequest {
    interface Raw {
        block_type: "JINJA";
        properties: JinjaPromptBlockPropertiesRequest.Raw;
        id: string;
        state?: PromptBlockState.Raw | null;
        cache_config?: EphemeralPromptCacheConfigRequest.Raw | null;
    }
}
