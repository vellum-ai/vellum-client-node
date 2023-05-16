/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const SandboxMetricInputParamsRequest: core.serialization.ObjectSchema<
    serializers.SandboxMetricInputParamsRequest.Raw,
    Vellum.SandboxMetricInputParamsRequest
> = core.serialization.object({
    params: core.serialization.lazyObject(async () => (await import("..")).EvaluationParamsRequest).optional(),
});

export declare namespace SandboxMetricInputParamsRequest {
    interface Raw {
        params?: serializers.EvaluationParamsRequest.Raw | null;
    }
}