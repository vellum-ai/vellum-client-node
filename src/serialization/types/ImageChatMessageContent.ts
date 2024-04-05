/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { VellumImage } from "./VellumImage";

export const ImageChatMessageContent: core.serialization.ObjectSchema<
    serializers.ImageChatMessageContent.Raw,
    Vellum.ImageChatMessageContent
> = core.serialization.object({
    value: VellumImage,
});

export declare namespace ImageChatMessageContent {
    interface Raw {
        value: VellumImage.Raw;
    }
}
