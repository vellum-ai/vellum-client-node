/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ArrayChatMessageContentItemRequest } from "./ArrayChatMessageContentItemRequest";

export const ArrayChatMessageContentRequest: core.serialization.ObjectSchema<
    serializers.ArrayChatMessageContentRequest.Raw,
    Vellum.ArrayChatMessageContentRequest
> = core.serialization.object({
    value: core.serialization.list(ArrayChatMessageContentItemRequest),
});

export declare namespace ArrayChatMessageContentRequest {
    interface Raw {
        value: ArrayChatMessageContentItemRequest.Raw[];
    }
}
