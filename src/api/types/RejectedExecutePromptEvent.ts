/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * The final data returned indicating an error occurred during the stream.
 */
export interface RejectedExecutePromptEvent {
    state: "REJECTED";
    error: Vellum.VellumError;
    executionId: string;
    meta?: Vellum.RejectedPromptExecutionMeta;
}
