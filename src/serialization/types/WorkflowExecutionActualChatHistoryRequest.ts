/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ChatMessageRequest } from "./ChatMessageRequest";

export const WorkflowExecutionActualChatHistoryRequest: core.serialization.ObjectSchema<
    serializers.WorkflowExecutionActualChatHistoryRequest.Raw,
    Vellum.WorkflowExecutionActualChatHistoryRequest
> = core.serialization.object({
    outputId: core.serialization.property("output_id", core.serialization.string().optional()),
    outputKey: core.serialization.property("output_key", core.serialization.string().optional()),
    quality: core.serialization.number().optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    timestamp: core.serialization.number().optional(),
    desiredOutputValue: core.serialization.property(
        "desired_output_value",
        core.serialization.list(ChatMessageRequest).optional()
    ),
});

export declare namespace WorkflowExecutionActualChatHistoryRequest {
    interface Raw {
        output_id?: string | null;
        output_key?: string | null;
        quality?: number | null;
        metadata?: Record<string, unknown> | null;
        timestamp?: number | null;
        desired_output_value?: ChatMessageRequest.Raw[] | null;
    }
}
