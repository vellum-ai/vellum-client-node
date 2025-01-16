/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { StringChatMessageContentRequest } from "./StringChatMessageContentRequest";
import { FunctionCallChatMessageContentRequest } from "./FunctionCallChatMessageContentRequest";
import { ImageChatMessageContentRequest } from "./ImageChatMessageContentRequest";
import { AudioChatMessageContentRequest } from "./AudioChatMessageContentRequest";

export const ArrayChatMessageContentItemRequest: core.serialization.Schema<
    serializers.ArrayChatMessageContentItemRequest.Raw,
    Vellum.ArrayChatMessageContentItemRequest
> = core.serialization.undiscriminatedUnion([
    StringChatMessageContentRequest,
    FunctionCallChatMessageContentRequest,
    ImageChatMessageContentRequest,
    AudioChatMessageContentRequest,
]);

export declare namespace ArrayChatMessageContentItemRequest {
    export type Raw =
        | StringChatMessageContentRequest.Raw
        | FunctionCallChatMessageContentRequest.Raw
        | ImageChatMessageContentRequest.Raw
        | AudioChatMessageContentRequest.Raw;
}
