/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { EntityStatus } from "./EntityStatus";
import { EnvironmentEnum } from "./EnvironmentEnum";
import { VellumVariable } from "./VellumVariable";

export const DeploymentRead: core.serialization.ObjectSchema<serializers.DeploymentRead.Raw, Vellum.DeploymentRead> =
    core.serialization.object({
        id: core.serialization.string(),
        created: core.serialization.date(),
        label: core.serialization.string(),
        name: core.serialization.string(),
        status: EntityStatus.optional(),
        environment: EnvironmentEnum.optionalNullable(),
        lastDeployedOn: core.serialization.property("last_deployed_on", core.serialization.date()),
        inputVariables: core.serialization.property("input_variables", core.serialization.list(VellumVariable)),
        description: core.serialization.string().optionalNullable(),
        activeModelVersionIds: core.serialization.property(
            "active_model_version_ids",
            core.serialization.list(core.serialization.string()).optionalNullable(),
        ),
        lastDeployedHistoryItemId: core.serialization.property(
            "last_deployed_history_item_id",
            core.serialization.string(),
        ),
    });

export declare namespace DeploymentRead {
    export interface Raw {
        id: string;
        created: string;
        label: string;
        name: string;
        status?: EntityStatus.Raw | null;
        environment?: (EnvironmentEnum.Raw | null) | null;
        last_deployed_on: string;
        input_variables: VellumVariable.Raw[];
        description?: (string | null) | null;
        active_model_version_ids?: (string[] | null) | null;
        last_deployed_history_item_id: string;
    }
}
