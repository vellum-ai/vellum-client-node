/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { StringChatMessageContent } from "./StringChatMessageContent";
import { FunctionCallChatMessageContent } from "./FunctionCallChatMessageContent";
import { ArrayChatMessageContent } from "./ArrayChatMessageContent";
import { ImageChatMessageContent } from "./ImageChatMessageContent";

export const ChatMessageContent: core.serialization.Schema<
    serializers.ChatMessageContent.Raw,
    Vellum.ChatMessageContent
> = core.serialization.undiscriminatedUnion([
    StringChatMessageContent,
    FunctionCallChatMessageContent,
    ArrayChatMessageContent,
    ImageChatMessageContent,
]);

export declare namespace ChatMessageContent {
    type Raw =
        | StringChatMessageContent.Raw
        | FunctionCallChatMessageContent.Raw
        | ArrayChatMessageContent.Raw
        | ImageChatMessageContent.Raw;
}
