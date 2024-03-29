/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Vellum from "../../../../../api";
import * as core from "../../../../../core";

export const DeploymentProviderPayloadRequest: core.serialization.Schema<
    serializers.DeploymentProviderPayloadRequest.Raw,
    Vellum.DeploymentProviderPayloadRequest
> = core.serialization.object({
    deploymentId: core.serialization.property("deployment_id", core.serialization.string().optional()),
    deploymentName: core.serialization.property("deployment_name", core.serialization.string().optional()),
    inputs: core.serialization.list(
        core.serialization.lazy(async () => (await import("../../../..")).PromptDeploymentInputRequest)
    ),
    releaseTag: core.serialization.property("release_tag", core.serialization.string().optional()),
});

export declare namespace DeploymentProviderPayloadRequest {
    interface Raw {
        deployment_id?: string | null;
        deployment_name?: string | null;
        inputs: serializers.PromptDeploymentInputRequest.Raw[];
        release_tag?: string | null;
    }
}
