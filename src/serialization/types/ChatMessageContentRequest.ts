/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { StringChatMessageContentRequest } from "./StringChatMessageContentRequest";
import { FunctionCallChatMessageContentRequest } from "./FunctionCallChatMessageContentRequest";
import { ArrayChatMessageContentRequest } from "./ArrayChatMessageContentRequest";
import { ImageChatMessageContentRequest } from "./ImageChatMessageContentRequest";

export const ChatMessageContentRequest: core.serialization.Schema<
    serializers.ChatMessageContentRequest.Raw,
    Vellum.ChatMessageContentRequest
> = core.serialization.undiscriminatedUnion([
    StringChatMessageContentRequest,
    FunctionCallChatMessageContentRequest,
    ArrayChatMessageContentRequest,
    ImageChatMessageContentRequest,
]);

export declare namespace ChatMessageContentRequest {
    type Raw =
        | StringChatMessageContentRequest.Raw
        | FunctionCallChatMessageContentRequest.Raw
        | ArrayChatMessageContentRequest.Raw
        | ImageChatMessageContentRequest.Raw;
}
