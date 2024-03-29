/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const FulfilledExecutePromptEvent: core.serialization.ObjectSchema<
    serializers.FulfilledExecutePromptEvent.Raw,
    Vellum.FulfilledExecutePromptEvent
> = core.serialization.object({
    outputs: core.serialization.list(core.serialization.lazy(async () => (await import("..")).PromptOutput)),
    executionId: core.serialization.property("execution_id", core.serialization.string()),
    meta: core.serialization.lazyObject(async () => (await import("..")).FulfilledPromptExecutionMeta).optional(),
});

export declare namespace FulfilledExecutePromptEvent {
    interface Raw {
        outputs: serializers.PromptOutput.Raw[];
        execution_id: string;
        meta?: serializers.FulfilledPromptExecutionMeta.Raw | null;
    }
}
