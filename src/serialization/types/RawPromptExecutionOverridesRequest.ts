/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const RawPromptExecutionOverridesRequest: core.serialization.ObjectSchema<
    serializers.RawPromptExecutionOverridesRequest.Raw,
    Vellum.RawPromptExecutionOverridesRequest
> = core.serialization.object({
    body: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    headers: core.serialization.record(core.serialization.string(), core.serialization.string().optional()).optional(),
    url: core.serialization.string().optional(),
});

export declare namespace RawPromptExecutionOverridesRequest {
    export interface Raw {
        body?: Record<string, unknown> | null;
        headers?: Record<string, string | null | undefined> | null;
        url?: string | null;
    }
}
