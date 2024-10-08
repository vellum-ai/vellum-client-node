/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FunctionDefinitionPromptBlockPropertiesRequest } from "./FunctionDefinitionPromptBlockPropertiesRequest";
import { PromptBlockState } from "./PromptBlockState";
import { EphemeralPromptCacheConfigRequest } from "./EphemeralPromptCacheConfigRequest";

export const FunctionDefinitionPromptBlockRequest: core.serialization.ObjectSchema<
    serializers.FunctionDefinitionPromptBlockRequest.Raw,
    Vellum.FunctionDefinitionPromptBlockRequest
> = core.serialization.object({
    blockType: core.serialization.property("block_type", core.serialization.stringLiteral("FUNCTION_DEFINITION")),
    properties: FunctionDefinitionPromptBlockPropertiesRequest,
    id: core.serialization.string(),
    state: PromptBlockState.optional(),
    cacheConfig: core.serialization.property("cache_config", EphemeralPromptCacheConfigRequest.optional()),
});

export declare namespace FunctionDefinitionPromptBlockRequest {
    interface Raw {
        block_type: "FUNCTION_DEFINITION";
        properties: FunctionDefinitionPromptBlockPropertiesRequest.Raw;
        id: string;
        state?: PromptBlockState.Raw | null;
        cache_config?: EphemeralPromptCacheConfigRequest.Raw | null;
    }
}
