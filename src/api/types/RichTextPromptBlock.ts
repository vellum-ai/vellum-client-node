/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A block that includes a combination of plain text and variable blocks.
 */
export interface RichTextPromptBlock {
    blockType: "RICH_TEXT";
    state?: Vellum.PromptBlockState;
    cacheConfig?: Vellum.EphemeralPromptCacheConfig | null;
    blocks: Vellum.RichTextChildBlock[];
}
