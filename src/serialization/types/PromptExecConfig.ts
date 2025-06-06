/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumVariable } from "./VellumVariable";
import { PromptParameters } from "./PromptParameters";
import { PromptSettings } from "./PromptSettings";
import { FunctionDefinition } from "./FunctionDefinition";

export const PromptExecConfig: core.serialization.ObjectSchema<
    serializers.PromptExecConfig.Raw,
    Vellum.PromptExecConfig
> = core.serialization.object({
    mlModel: core.serialization.property("ml_model", core.serialization.string()),
    inputVariables: core.serialization.property("input_variables", core.serialization.list(VellumVariable)),
    parameters: PromptParameters,
    settings: PromptSettings.optionalNullable(),
    blocks: core.serialization.list(core.serialization.lazy(() => serializers.PromptBlock)),
    functions: core.serialization.list(FunctionDefinition).optionalNullable(),
});

export declare namespace PromptExecConfig {
    export interface Raw {
        ml_model: string;
        input_variables: VellumVariable.Raw[];
        parameters: PromptParameters.Raw;
        settings?: (PromptSettings.Raw | null) | null;
        blocks: serializers.PromptBlock.Raw[];
        functions?: (FunctionDefinition.Raw[] | null) | null;
    }
}
