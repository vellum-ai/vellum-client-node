/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A block that represents an image in a prompt template.
 */
export interface ImagePromptBlock {
    blockType: "IMAGE";
    state?: Vellum.PromptBlockState;
    cacheConfig?: Vellum.EphemeralPromptCacheConfig;
    src: string;
    metadata?: Record<string, unknown>;
}
