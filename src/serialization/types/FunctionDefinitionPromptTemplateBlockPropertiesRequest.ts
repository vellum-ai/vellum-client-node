/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const FunctionDefinitionPromptTemplateBlockPropertiesRequest: core.serialization.ObjectSchema<
    serializers.FunctionDefinitionPromptTemplateBlockPropertiesRequest.Raw,
    Vellum.FunctionDefinitionPromptTemplateBlockPropertiesRequest
> = core.serialization.object({
    functionName: core.serialization.property("function_name", core.serialization.string().optional()),
    functionDescription: core.serialization.property("function_description", core.serialization.string().optional()),
    functionParameters: core.serialization.property(
        "function_parameters",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    functionForced: core.serialization.property("function_forced", core.serialization.boolean().optional()),
});

export declare namespace FunctionDefinitionPromptTemplateBlockPropertiesRequest {
    interface Raw {
        function_name?: string | null;
        function_description?: string | null;
        function_parameters?: Record<string, unknown> | null;
        function_forced?: boolean | null;
    }
}
