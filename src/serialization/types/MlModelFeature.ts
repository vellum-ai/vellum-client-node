/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const MlModelFeature: core.serialization.Schema<serializers.MlModelFeature.Raw, Vellum.MlModelFeature> =
    core.serialization.enum_([
        "TEXT",
        "CHAT_MESSAGE_SYSTEM",
        "CHAT_MESSAGE_USER",
        "CHAT_MESSAGE_ASSISTANT",
        "CHAT_MESSAGE_ASSISTANT_UNTERMINATED",
        "CHAT_MESSAGE_FUNCTION_CALL",
        "CHAT_MESSAGE_IMAGE",
        "FUNCTION_DEFINITION",
        "STREAMING_SUPPORT",
    ]);

export declare namespace MlModelFeature {
    type Raw =
        | "TEXT"
        | "CHAT_MESSAGE_SYSTEM"
        | "CHAT_MESSAGE_USER"
        | "CHAT_MESSAGE_ASSISTANT"
        | "CHAT_MESSAGE_ASSISTANT_UNTERMINATED"
        | "CHAT_MESSAGE_FUNCTION_CALL"
        | "CHAT_MESSAGE_IMAGE"
        | "FUNCTION_DEFINITION"
        | "STREAMING_SUPPORT";
}
