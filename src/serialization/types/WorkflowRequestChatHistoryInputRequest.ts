/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const WorkflowRequestChatHistoryInputRequest: core.serialization.ObjectSchema<
    serializers.WorkflowRequestChatHistoryInputRequest.Raw,
    Vellum.WorkflowRequestChatHistoryInputRequest
> = core.serialization.object({
    name: core.serialization.string(),
    value: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).ChatMessageRequest)),
});

export declare namespace WorkflowRequestChatHistoryInputRequest {
    interface Raw {
        name: string;
        value: serializers.ChatMessageRequest.Raw[];
    }
}
