/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A block that represents a function definition in a prompt template.
 */
export interface FunctionDefinition {
    state?: Vellum.PromptBlockState;
    cacheConfig?: Vellum.EphemeralPromptCacheConfig;
    name?: string;
    description?: string;
    parameters?: Record<string, unknown>;
    forced?: boolean;
    strict?: boolean;
}