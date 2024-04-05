/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { FunctionCallChatMessageContentValueRequest } from "./FunctionCallChatMessageContentValueRequest";

export const FunctionCallChatMessageContentRequest: core.serialization.ObjectSchema<
    serializers.FunctionCallChatMessageContentRequest.Raw,
    Vellum.FunctionCallChatMessageContentRequest
> = core.serialization.object({
    value: FunctionCallChatMessageContentValueRequest,
});

export declare namespace FunctionCallChatMessageContentRequest {
    interface Raw {
        value: FunctionCallChatMessageContentValueRequest.Raw;
    }
}
