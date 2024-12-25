/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A block that represents a variable in a prompt template.
 */
export interface VariablePromptBlock {
    blockType: "VARIABLE";
    state?: Vellum.PromptBlockState;
    cacheConfig?: Vellum.EphemeralPromptCacheConfig;
    inputVariable: string;
}
