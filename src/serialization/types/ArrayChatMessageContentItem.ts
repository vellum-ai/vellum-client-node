/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { StringChatMessageContent } from "./StringChatMessageContent";
import { FunctionCallChatMessageContent } from "./FunctionCallChatMessageContent";
import { ImageChatMessageContent } from "./ImageChatMessageContent";
import { AudioChatMessageContent } from "./AudioChatMessageContent";

export const ArrayChatMessageContentItem: core.serialization.Schema<
    serializers.ArrayChatMessageContentItem.Raw,
    Vellum.ArrayChatMessageContentItem
> = core.serialization.undiscriminatedUnion([
    StringChatMessageContent,
    FunctionCallChatMessageContent,
    ImageChatMessageContent,
    AudioChatMessageContent,
]);

export declare namespace ArrayChatMessageContentItem {
    export type Raw =
        | StringChatMessageContent.Raw
        | FunctionCallChatMessageContent.Raw
        | ImageChatMessageContent.Raw
        | AudioChatMessageContent.Raw;
}
