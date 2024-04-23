/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

/**
 * A block of Jinja template code that is used to generate a prompt
 */
export interface JinjaPromptTemplateBlockRequest {
    id: string;
    state?: Vellum.PromptTemplateBlockState;
    properties: Vellum.JinjaPromptTemplateBlockPropertiesRequest;
}
