/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface RegisterPromptPromptInfoRequest {
    promptSyntaxVersion?: number;
    promptBlockData?: Vellum.PromptTemplateBlockDataRequest;
    /** Names of the input variables specified in the prompt template. */
    inputVariables?: Vellum.PromptTemplateInputVariableRequest[];
}
