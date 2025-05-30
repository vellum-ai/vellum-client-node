/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { PromptBlockState } from "./PromptBlockState";
import { EphemeralPromptCacheConfig } from "./EphemeralPromptCacheConfig";

export const FunctionDefinition: core.serialization.ObjectSchema<
    serializers.FunctionDefinition.Raw,
    Vellum.FunctionDefinition
> = core.serialization.object({
    state: PromptBlockState.optional(),
    cacheConfig: core.serialization.property("cache_config", EphemeralPromptCacheConfig.optionalNullable()),
    name: core.serialization.string().optionalNullable(),
    description: core.serialization.string().optionalNullable(),
    parameters: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optionalNullable(),
    forced: core.serialization.boolean().optionalNullable(),
    strict: core.serialization.boolean().optionalNullable(),
});

export declare namespace FunctionDefinition {
    export interface Raw {
        state?: PromptBlockState.Raw | null;
        cache_config?: (EphemeralPromptCacheConfig.Raw | null) | null;
        name?: (string | null) | null;
        description?: (string | null) | null;
        parameters?: (Record<string, unknown> | null) | null;
        forced?: (boolean | null) | null;
        strict?: (boolean | null) | null;
    }
}
