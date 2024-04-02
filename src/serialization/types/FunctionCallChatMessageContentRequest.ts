/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const FunctionCallChatMessageContentRequest: core.serialization.ObjectSchema<
    serializers.FunctionCallChatMessageContentRequest.Raw,
    Vellum.FunctionCallChatMessageContentRequest
> = core.serialization.object({
    value: core.serialization.lazyObject(async () => (await import("..")).FunctionCallChatMessageContentValueRequest),
});

export declare namespace FunctionCallChatMessageContentRequest {
    interface Raw {
        value: serializers.FunctionCallChatMessageContentValueRequest.Raw;
    }
}