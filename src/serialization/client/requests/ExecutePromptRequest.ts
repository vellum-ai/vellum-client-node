/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import * as Vellum from "../../../api";
import * as core from "../../../core";

export const ExecutePromptRequest: core.serialization.Schema<
    serializers.ExecutePromptRequest.Raw,
    Vellum.ExecutePromptRequest
> = core.serialization.object({
    inputs: core.serialization.list(
        core.serialization.lazy(async () => (await import("../..")).PromptDeploymentInputRequest)
    ),
    promptDeploymentId: core.serialization.property("prompt_deployment_id", core.serialization.string().optional()),
    promptDeploymentName: core.serialization.property("prompt_deployment_name", core.serialization.string().optional()),
    releaseTag: core.serialization.property("release_tag", core.serialization.string().optional()),
    externalId: core.serialization.property("external_id", core.serialization.string().optional()),
    expandMeta: core.serialization.property(
        "expand_meta",
        core.serialization
            .lazyObject(async () => (await import("../..")).PromptDeploymentExpandMetaRequestRequest)
            .optional()
    ),
    rawOverrides: core.serialization.property(
        "raw_overrides",
        core.serialization.lazyObject(async () => (await import("../..")).RawPromptExecutionOverridesRequest).optional()
    ),
    expandRaw: core.serialization.property(
        "expand_raw",
        core.serialization.list(core.serialization.string()).optional()
    ),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace ExecutePromptRequest {
    interface Raw {
        inputs: serializers.PromptDeploymentInputRequest.Raw[];
        prompt_deployment_id?: string | null;
        prompt_deployment_name?: string | null;
        release_tag?: string | null;
        external_id?: string | null;
        expand_meta?: serializers.PromptDeploymentExpandMetaRequestRequest.Raw | null;
        raw_overrides?: serializers.RawPromptExecutionOverridesRequest.Raw | null;
        expand_raw?: string[] | null;
        metadata?: Record<string, unknown> | null;
    }
}