/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumAudio } from "./VellumAudio";

export const AudioChatMessageContent: core.serialization.ObjectSchema<
    serializers.AudioChatMessageContent.Raw,
    Vellum.AudioChatMessageContent
> = core.serialization.object({
    type: core.serialization.stringLiteral("AUDIO"),
    value: VellumAudio,
});

export declare namespace AudioChatMessageContent {
    interface Raw {
        type: "AUDIO";
        value: VellumAudio.Raw;
    }
}