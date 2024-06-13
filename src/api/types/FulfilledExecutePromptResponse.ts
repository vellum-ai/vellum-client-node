/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * The successful response from the model containing all of the resolved values generated by the prompt.
 */
export interface FulfilledExecutePromptResponse {
    meta?: Vellum.PromptExecutionMeta;
    /** The subset of the raw response from the model that the request opted into with `expand_raw`. */
    raw?: Record<string, unknown>;
    /** The ID of the execution. */
    executionId: string;
    outputs: Vellum.PromptOutput[];
}
