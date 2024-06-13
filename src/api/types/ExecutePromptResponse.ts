/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type ExecutePromptResponse = Vellum.ExecutePromptResponse.Fulfilled | Vellum.ExecutePromptResponse.Rejected;

export declare namespace ExecutePromptResponse {
    interface Fulfilled extends Vellum.FulfilledExecutePromptResponse {
        state: "FULFILLED";
    }

    interface Rejected extends Vellum.RejectedExecutePromptResponse {
        state: "REJECTED";
    }
}
