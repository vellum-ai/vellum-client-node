/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vellum from "../../../../../api/index";
import * as core from "../../../../../core";

export const DeploySandboxPromptRequest: core.serialization.Schema<
    serializers.DeploySandboxPromptRequest.Raw,
    Vellum.DeploySandboxPromptRequest
> = core.serialization.object({
    promptDeploymentId: core.serialization.property("prompt_deployment_id", core.serialization.string().optional()),
    promptDeploymentName: core.serialization.property("prompt_deployment_name", core.serialization.string().optional()),
    label: core.serialization.string().optional(),
    releaseTags: core.serialization.property(
        "release_tags",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace DeploySandboxPromptRequest {
    interface Raw {
        prompt_deployment_id?: string | null;
        prompt_deployment_name?: string | null;
        label?: string | null;
        release_tags?: string[] | null;
    }
}
