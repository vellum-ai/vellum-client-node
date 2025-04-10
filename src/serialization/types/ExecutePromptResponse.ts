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
> = core.serialization.undiscriminatedUnion([FulfilledExecutePromptResponse, RejectedExecutePromptResponse]);

export declare namespace ExecutePromptResponse {
    export type Raw = FulfilledExecutePromptResponse.Raw | RejectedExecutePromptResponse.Raw;
}
