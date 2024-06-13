/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FinishReasonEnum } from "./FinishReasonEnum";

export const RejectedPromptExecutionMeta: core.serialization.ObjectSchema<
    serializers.RejectedPromptExecutionMeta.Raw,
    Vellum.RejectedPromptExecutionMeta
> = core.serialization.object({
    latency: core.serialization.number().optional(),
    finishReason: core.serialization.property("finish_reason", FinishReasonEnum.optional()),
});

export declare namespace RejectedPromptExecutionMeta {
    interface Raw {
        latency?: number | null;
        finish_reason?: FinishReasonEnum.Raw | null;
    }
}
