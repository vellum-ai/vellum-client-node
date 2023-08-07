/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ModelVersionExecConfig: core.serialization.ObjectSchema<
    serializers.ModelVersionExecConfig.Raw,
    Vellum.ModelVersionExecConfig
> = core.serialization.object({
    parameters: core.serialization.lazyObject(async () => (await import("..")).ModelVersionExecConfigParameters),
    inputVariables: core.serialization.property(
        "input_variables",
        core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).InputVariable))
    ),
    promptTemplate: core.serialization.property("prompt_template", core.serialization.string().optional()),
    promptBlockData: core.serialization.property(
        "prompt_block_data",
        core.serialization.lazyObject(async () => (await import("..")).PromptTemplateBlockData).optional()
    ),
    promptSyntaxVersion: core.serialization.property("prompt_syntax_version", core.serialization.number().optional()),
});

export declare namespace ModelVersionExecConfig {
    interface Raw {
        parameters: serializers.ModelVersionExecConfigParameters.Raw;
        input_variables: serializers.InputVariable.Raw[];
        prompt_template?: string | null;
        prompt_block_data?: serializers.PromptTemplateBlockData.Raw | null;
        prompt_syntax_version?: number | null;
    }
}
