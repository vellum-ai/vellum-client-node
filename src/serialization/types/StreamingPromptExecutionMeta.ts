/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const StreamingPromptExecutionMeta: core.serialization.ObjectSchema<
    serializers.StreamingPromptExecutionMeta.Raw,
    Vellum.StreamingPromptExecutionMeta
> = core.serialization.object({
    latency: core.serialization.number().optionalNullable(),
});

export declare namespace StreamingPromptExecutionMeta {
    export interface Raw {
        latency?: (number | null) | null;
    }
}
