/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { StringChatMessageContentRequest } from "./StringChatMessageContentRequest";
import { FunctionCallChatMessageContentRequest } from "./FunctionCallChatMessageContentRequest";
import { ArrayChatMessageContentRequest } from "./ArrayChatMessageContentRequest";
import { ImageChatMessageContentRequest } from "./ImageChatMessageContentRequest";

export const ChatMessageContentRequest: core.serialization.Schema<
    serializers.ChatMessageContentRequest.Raw,
    Vellum.ChatMessageContentRequest
> = core.serialization
    .union("type", {
        STRING: StringChatMessageContentRequest,
        FUNCTION_CALL: FunctionCallChatMessageContentRequest,
        ARRAY: ArrayChatMessageContentRequest,
        IMAGE: ImageChatMessageContentRequest,
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

    interface String extends StringChatMessageContentRequest.Raw {
        type: "STRING";
    }

    interface FunctionCall extends FunctionCallChatMessageContentRequest.Raw {
        type: "FUNCTION_CALL";
    }

    interface Array extends ArrayChatMessageContentRequest.Raw {
        type: "ARRAY";
    }

    interface Image extends ImageChatMessageContentRequest.Raw {
        type: "IMAGE";
    }
}
