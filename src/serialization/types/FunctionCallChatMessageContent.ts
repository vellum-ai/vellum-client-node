/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FunctionCallChatMessageContentValue } from "./FunctionCallChatMessageContentValue";

export const FunctionCallChatMessageContent: core.serialization.ObjectSchema<
    serializers.FunctionCallChatMessageContent.Raw,
    Vellum.FunctionCallChatMessageContent
> = core.serialization.object({
    value: FunctionCallChatMessageContentValue,
});

export declare namespace FunctionCallChatMessageContent {
    interface Raw {
        value: FunctionCallChatMessageContentValue.Raw;
    }
}
