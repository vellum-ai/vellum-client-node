/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const SandboxMetricInputParams: core.serialization.ObjectSchema<
    serializers.SandboxMetricInputParams.Raw,
    Vellum.SandboxMetricInputParams
> = core.serialization.object({
    params: core.serialization.lazyObject(async () => (await import("..")).EvaluationParams).optional(),
});

export declare namespace SandboxMetricInputParams {
    interface Raw {
        params?: serializers.EvaluationParams.Raw | null;
    }
}
