/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { EntityStatus } from "./EntityStatus";
import { EnvironmentEnum } from "./EnvironmentEnum";
import { VellumVariable } from "./VellumVariable";

export const WorkflowDeploymentRead: core.serialization.ObjectSchema<
    serializers.WorkflowDeploymentRead.Raw,
    Vellum.WorkflowDeploymentRead
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    label: core.serialization.string(),
    status: EntityStatus.optional(),
    environment: EnvironmentEnum.optionalNullable(),
    created: core.serialization.date(),
    lastDeployedOn: core.serialization.property("last_deployed_on", core.serialization.date()),
    lastDeployedHistoryItemId: core.serialization.property(
        "last_deployed_history_item_id",
        core.serialization.string(),
    ),
    inputVariables: core.serialization.property("input_variables", core.serialization.list(VellumVariable)),
    outputVariables: core.serialization.property("output_variables", core.serialization.list(VellumVariable)),
    description: core.serialization.string().optionalNullable(),
});

export declare namespace WorkflowDeploymentRead {
    export interface Raw {
        id: string;
        name: string;
        label: string;
        status?: EntityStatus.Raw | null;
        environment?: (EnvironmentEnum.Raw | null) | null;
        created: string;
        last_deployed_on: string;
        last_deployed_history_item_id: string;
        input_variables: VellumVariable.Raw[];
        output_variables: VellumVariable.Raw[];
        description?: (string | null) | null;
    }
}
