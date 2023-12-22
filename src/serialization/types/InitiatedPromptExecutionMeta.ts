/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const InitiatedPromptExecutionMeta: core.serialization.ObjectSchema<
    serializers.InitiatedPromptExecutionMeta.Raw,
    Vellum.InitiatedPromptExecutionMeta
> = core.serialization.object({
    modelName: core.serialization.property("model_name", core.serialization.string().optional()),
    latency: core.serialization.number().optional(),
    deploymentReleaseTag: core.serialization.property("deployment_release_tag", core.serialization.string().optional()),
    promptVersionId: core.serialization.property("prompt_version_id", core.serialization.string().optional()),
});

export declare namespace InitiatedPromptExecutionMeta {
    interface Raw {
        model_name?: string | null;
        latency?: number | null;
        deployment_release_tag?: string | null;
        prompt_version_id?: string | null;
    }
}
