/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ArrayChatMessageContentItemRequest: core.serialization.Schema<
    serializers.ArrayChatMessageContentItemRequest.Raw,
    Vellum.ArrayChatMessageContentItemRequest
> = core.serialization
    .union("type", {
        STRING: core.serialization.lazyObject(async () => (await import("..")).StringChatMessageContentRequest),
        FUNCTION_CALL: core.serialization.lazyObject(
            async () => (await import("..")).FunctionCallChatMessageContentRequest
        ),
        IMAGE: core.serialization.lazyObject(async () => (await import("..")).ImageChatMessageContentRequest),
    })
    .transform<Vellum.ArrayChatMessageContentItemRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ArrayChatMessageContentItemRequest {
    type Raw =
        | ArrayChatMessageContentItemRequest.String
        | ArrayChatMessageContentItemRequest.FunctionCall
        | ArrayChatMessageContentItemRequest.Image;

    interface String extends serializers.StringChatMessageContentRequest.Raw {
        type: "STRING";
    }

    interface FunctionCall extends serializers.FunctionCallChatMessageContentRequest.Raw {
        type: "FUNCTION_CALL";
    }

    interface Image extends serializers.ImageChatMessageContentRequest.Raw {
        type: "IMAGE";
    }
}
