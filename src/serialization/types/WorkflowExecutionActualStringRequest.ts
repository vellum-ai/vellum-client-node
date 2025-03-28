/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const WorkflowExecutionActualStringRequest: core.serialization.ObjectSchema<
    serializers.WorkflowExecutionActualStringRequest.Raw,
    Vellum.WorkflowExecutionActualStringRequest
> = core.serialization.object({
    outputId: core.serialization.property("output_id", core.serialization.string().optional()),
    outputKey: core.serialization.property("output_key", core.serialization.string().optional()),
    quality: core.serialization.number().optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    timestamp: core.serialization.number().optional(),
    outputType: core.serialization.property("output_type", core.serialization.stringLiteral("STRING")),
    desiredOutputValue: core.serialization.property("desired_output_value", core.serialization.string().optional()),
});

export declare namespace WorkflowExecutionActualStringRequest {
    export interface Raw {
        output_id?: string | null;
        output_key?: string | null;
        quality?: number | null;
        metadata?: Record<string, unknown> | null;
        timestamp?: number | null;
        output_type: "STRING";
        desired_output_value?: string | null;
    }
}
