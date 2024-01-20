/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const SlimWorkflowDeployment: core.serialization.ObjectSchema<
    serializers.SlimWorkflowDeployment.Raw,
    Vellum.SlimWorkflowDeployment
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    label: core.serialization.string(),
    status: core.serialization.lazy(async () => (await import("..")).EntityStatus).optional(),
    environment: core.serialization.lazy(async () => (await import("..")).EnvironmentEnum).optional(),
    created: core.serialization.date(),
    lastDeployedOn: core.serialization.property("last_deployed_on", core.serialization.date()),
    inputVariables: core.serialization.property(
        "input_variables",
        core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).VellumVariable))
    ),
    outputVariables: core.serialization.property(
        "output_variables",
        core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).VellumVariable))
    ),
});

export declare namespace SlimWorkflowDeployment {
    interface Raw {
        id: string;
        name: string;
        label: string;
        status?: serializers.EntityStatus.Raw | null;
        environment?: serializers.EnvironmentEnum.Raw | null;
        created: string;
        last_deployed_on: string;
        input_variables: serializers.VellumVariable.Raw[];
        output_variables: serializers.VellumVariable.Raw[];
    }
}
