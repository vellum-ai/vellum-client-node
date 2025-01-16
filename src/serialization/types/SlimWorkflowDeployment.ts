/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { EntityStatus } from "./EntityStatus";
import { EnvironmentEnum } from "./EnvironmentEnum";
import { VellumVariable } from "./VellumVariable";

export const SlimWorkflowDeployment: core.serialization.ObjectSchema<
    serializers.SlimWorkflowDeployment.Raw,
    Vellum.SlimWorkflowDeployment
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    label: core.serialization.string(),
    status: EntityStatus.optional(),
    environment: EnvironmentEnum.optional(),
    created: core.serialization.date(),
    lastDeployedOn: core.serialization.property("last_deployed_on", core.serialization.date()),
    inputVariables: core.serialization.property("input_variables", core.serialization.list(VellumVariable)),
    outputVariables: core.serialization.property("output_variables", core.serialization.list(VellumVariable)),
    description: core.serialization.string().optional(),
});

export declare namespace SlimWorkflowDeployment {
    export interface Raw {
        id: string;
        name: string;
        label: string;
        status?: EntityStatus.Raw | null;
        environment?: EnvironmentEnum.Raw | null;
        created: string;
        last_deployed_on: string;
        input_variables: VellumVariable.Raw[];
        output_variables: VellumVariable.Raw[];
        description?: string | null;
    }
}
