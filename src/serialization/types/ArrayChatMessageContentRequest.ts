/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ArrayChatMessageContentRequest: core.serialization.ObjectSchema<
    serializers.ArrayChatMessageContentRequest.Raw,
    Vellum.ArrayChatMessageContentRequest
> = core.serialization.object({
    value: core.serialization.list(
        core.serialization.lazy(async () => (await import("..")).ArrayChatMessageContentItemRequest)
    ),
});

export declare namespace ArrayChatMessageContentRequest {
    interface Raw {
        value: serializers.ArrayChatMessageContentItemRequest.Raw[];
    }
}