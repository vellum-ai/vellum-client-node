/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const PromptTemplateBlockDataRequest: core.serialization.ObjectSchema<
    serializers.PromptTemplateBlockDataRequest.Raw,
    Vellum.PromptTemplateBlockDataRequest
> = core.serialization.object({
    version: core.serialization.number(),
    blocks: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).PromptTemplateBlockRequest)
    ),
});

export declare namespace PromptTemplateBlockDataRequest {
    interface Raw {
        version: number;
        blocks: serializers.PromptTemplateBlockRequest.Raw[];
    }
}
