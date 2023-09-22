/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const PromptTemplateBlockProperties: core.serialization.ObjectSchema<
    serializers.PromptTemplateBlockProperties.Raw,
    Vellum.PromptTemplateBlockProperties
> = core.serialization.object({
    chatRole: core.serialization.property(
        "chat_role",
        core.serialization.lazy(async () => (await import("..")).ChatMessageRole).optional()
    ),
    chatMessageUnterminated: core.serialization.property(
        "chat_message_unterminated",
        core.serialization.boolean().optional()
    ),
    template: core.serialization.string().optional(),
    templateType: core.serialization.property(
        "template_type",
        core.serialization.lazy(async () => (await import("..")).VellumVariableType).optional()
    ),
    functionName: core.serialization.property("function_name", core.serialization.string().optional()),
    functionDescription: core.serialization.property("function_description", core.serialization.string().optional()),
    functionParameters: core.serialization.property(
        "function_parameters",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    functionForced: core.serialization.property("function_forced", core.serialization.boolean().optional()),
    blocks: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PromptTemplateBlock))
        .optional(),
});

export declare namespace PromptTemplateBlockProperties {
    interface Raw {
        chat_role?: serializers.ChatMessageRole.Raw | null;
        chat_message_unterminated?: boolean | null;
        template?: string | null;
        template_type?: serializers.VellumVariableType.Raw | null;
        function_name?: string | null;
        function_description?: string | null;
        function_parameters?: Record<string, unknown> | null;
        function_forced?: boolean | null;
        blocks?: serializers.PromptTemplateBlock.Raw[] | null;
    }
}
