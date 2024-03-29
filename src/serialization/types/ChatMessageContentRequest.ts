/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ChatMessageContentRequest: core.serialization.Schema<
    serializers.ChatMessageContentRequest.Raw,
    Vellum.ChatMessageContentRequest
> = core.serialization
    .union("type", {
        STRING: core.serialization.lazyObject(async () => (await import("..")).StringChatMessageContentRequest),
        FUNCTION_CALL: core.serialization.lazyObject(
            async () => (await import("..")).FunctionCallChatMessageContentRequest
        ),
        ARRAY: core.serialization.lazyObject(async () => (await import("..")).ArrayChatMessageContentRequest),
        IMAGE: core.serialization.lazyObject(async () => (await import("..")).ImageChatMessageContentRequest),
    })
    .transform<Vellum.ChatMessageContentRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ChatMessageContentRequest {
    type Raw =
        | ChatMessageContentRequest.String
        | ChatMessageContentRequest.FunctionCall
        | ChatMessageContentRequest.Array
        | ChatMessageContentRequest.Image;

    interface String extends serializers.StringChatMessageContentRequest.Raw {
        type: "STRING";
    }

    interface FunctionCall extends serializers.FunctionCallChatMessageContentRequest.Raw {
        type: "FUNCTION_CALL";
    }

    interface Array extends serializers.ArrayChatMessageContentRequest.Raw {
        type: "ARRAY";
    }

    interface Image extends serializers.ImageChatMessageContentRequest.Raw {
        type: "IMAGE";
    }
}
