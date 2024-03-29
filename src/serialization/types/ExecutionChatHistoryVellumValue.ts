/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ExecutionChatHistoryVellumValue: core.serialization.ObjectSchema<
    serializers.ExecutionChatHistoryVellumValue.Raw,
    Vellum.ExecutionChatHistoryVellumValue
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    value: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).ChatMessage))
        .optional(),
});

export declare namespace ExecutionChatHistoryVellumValue {
    interface Raw {
        id: string;
        name: string;
        value?: serializers.ChatMessage.Raw[] | null;
    }
}
