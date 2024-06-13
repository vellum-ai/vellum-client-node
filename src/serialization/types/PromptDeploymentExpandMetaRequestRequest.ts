/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const PromptDeploymentExpandMetaRequestRequest: core.serialization.ObjectSchema<
    serializers.PromptDeploymentExpandMetaRequestRequest.Raw,
    Vellum.PromptDeploymentExpandMetaRequestRequest
> = core.serialization.object({
    modelName: core.serialization.property("model_name", core.serialization.boolean().optional()),
    latency: core.serialization.boolean().optional(),
    deploymentReleaseTag: core.serialization.property(
        "deployment_release_tag",
        core.serialization.boolean().optional()
    ),
    promptVersionId: core.serialization.property("prompt_version_id", core.serialization.boolean().optional()),
    finishReason: core.serialization.property("finish_reason", core.serialization.boolean().optional()),
    usage: core.serialization.boolean().optional(),
});

export declare namespace PromptDeploymentExpandMetaRequestRequest {
    interface Raw {
        model_name?: boolean | null;
        latency?: boolean | null;
        deployment_release_tag?: boolean | null;
        prompt_version_id?: boolean | null;
        finish_reason?: boolean | null;
        usage?: boolean | null;
    }
}
