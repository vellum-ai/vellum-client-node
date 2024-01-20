/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ArrayChatMessageContent: core.serialization.ObjectSchema<
    serializers.ArrayChatMessageContent.Raw,
    Vellum.ArrayChatMessageContent
> = core.serialization.object({
    value: core.serialization.list(
        core.serialization.lazy(async () => (await import("..")).ArrayChatMessageContentItem)
    ),
});

export declare namespace ArrayChatMessageContent {
    interface Raw {
        value: serializers.ArrayChatMessageContentItem.Raw[];
    }
}
