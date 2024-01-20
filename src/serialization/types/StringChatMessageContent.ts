/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const StringChatMessageContent: core.serialization.ObjectSchema<
    serializers.StringChatMessageContent.Raw,
    Vellum.StringChatMessageContent
> = core.serialization.object({
    value: core.serialization.string(),
});

export declare namespace StringChatMessageContent {
    interface Raw {
        value: string;
    }
}
