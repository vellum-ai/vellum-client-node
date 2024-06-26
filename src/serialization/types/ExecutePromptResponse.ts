/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FulfilledExecutePromptResponse } from "./FulfilledExecutePromptResponse";
import { RejectedExecutePromptResponse } from "./RejectedExecutePromptResponse";

export const ExecutePromptResponse: core.serialization.Schema<
    serializers.ExecutePromptResponse.Raw,
    Vellum.ExecutePromptResponse
> = core.serialization
    .union("state", {
        FULFILLED: FulfilledExecutePromptResponse,
        REJECTED: RejectedExecutePromptResponse,
    })
    .transform<Vellum.ExecutePromptResponse>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ExecutePromptResponse {
    type Raw = ExecutePromptResponse.Fulfilled | ExecutePromptResponse.Rejected;

    interface Fulfilled extends FulfilledExecutePromptResponse.Raw {
        state: "FULFILLED";
    }

    interface Rejected extends RejectedExecutePromptResponse.Raw {
        state: "REJECTED";
    }
}
