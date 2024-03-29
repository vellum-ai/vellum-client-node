/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ConditionalNodeResult: core.serialization.ObjectSchema<
    serializers.ConditionalNodeResult.Raw,
    Vellum.ConditionalNodeResult
> = core.serialization.object({
    data: core.serialization.lazyObject(async () => (await import("..")).ConditionalNodeResultData),
});

export declare namespace ConditionalNodeResult {
    interface Raw {
        data: serializers.ConditionalNodeResultData.Raw;
    }
}
