/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const DeploymentRead: core.serialization.ObjectSchema<serializers.DeploymentRead.Raw, Vellum.DeploymentRead> =
    core.serialization.object({
        id: core.serialization.string(),
        created: core.serialization.date(),
        label: core.serialization.string(),
        name: core.serialization.string(),
        status: core.serialization.lazy(async () => (await import("..")).EntityStatus).optional(),
        environment: core.serialization.lazy(async () => (await import("..")).EnvironmentEnum).optional(),
        lastDeployedOn: core.serialization.property("last_deployed_on", core.serialization.date()),
        inputVariables: core.serialization.property(
            "input_variables",
            core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).VellumVariable))
        ),
        activeModelVersionIds: core.serialization.property(
            "active_model_version_ids",
            core.serialization.list(core.serialization.string())
        ),
    });

export declare namespace DeploymentRead {
    interface Raw {
        id: string;
        created: string;
        label: string;
        name: string;
        status?: serializers.EntityStatus.Raw | null;
        environment?: serializers.EnvironmentEnum.Raw | null;
        last_deployed_on: string;
        input_variables: serializers.VellumVariable.Raw[];
        active_model_version_ids: string[];
    }
}
