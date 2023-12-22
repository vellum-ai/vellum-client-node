/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const InitiatedExecutePromptEvent: core.serialization.ObjectSchema<
    serializers.InitiatedExecutePromptEvent.Raw,
    Vellum.InitiatedExecutePromptEvent
> = core.serialization.object({
    meta: core.serialization.lazyObject(async () => (await import("..")).InitiatedPromptExecutionMeta).optional(),
    executionId: core.serialization.property("execution_id", core.serialization.string()),
});

export declare namespace InitiatedExecutePromptEvent {
    interface Raw {
        meta?: serializers.InitiatedPromptExecutionMeta.Raw | null;
        execution_id: string;
    }
}