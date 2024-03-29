/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const PromptNodeResult: core.serialization.ObjectSchema<
    serializers.PromptNodeResult.Raw,
    Vellum.PromptNodeResult
> = core.serialization.object({
    data: core.serialization.lazyObject(async () => (await import("..")).PromptNodeResultData),
});

export declare namespace PromptNodeResult {
    interface Raw {
        data: serializers.PromptNodeResultData.Raw;
    }
}
