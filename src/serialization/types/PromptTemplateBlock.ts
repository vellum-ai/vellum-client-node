/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const PromptTemplateBlock: core.serialization.ObjectSchema<
    serializers.PromptTemplateBlock.Raw,
    Vellum.PromptTemplateBlock
> = core.serialization.object({
    id: core.serialization.string(),
    blockType: core.serialization.property(
        "block_type",
        core.serialization.lazy(async () => (await import("..")).BlockTypeEnum)
    ),
    properties: core.serialization.lazyObject(async () => (await import("..")).PromptTemplateBlockProperties),
});

export declare namespace PromptTemplateBlock {
    interface Raw {
        id: string;
        block_type: serializers.BlockTypeEnum.Raw;
        properties: serializers.PromptTemplateBlockProperties.Raw;
    }
}
