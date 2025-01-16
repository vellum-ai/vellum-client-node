/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumVariable } from "./VellumVariable";

export const DeploymentHistoryItem: core.serialization.ObjectSchema<
    serializers.DeploymentHistoryItem.Raw,
    Vellum.DeploymentHistoryItem
> = core.serialization.object({
    id: core.serialization.string(),
    deploymentId: core.serialization.property("deployment_id", core.serialization.string()),
    timestamp: core.serialization.date(),
    label: core.serialization.string(),
    name: core.serialization.string(),
    inputVariables: core.serialization.property("input_variables", core.serialization.list(VellumVariable)),
    description: core.serialization.string().optional(),
});

export declare namespace DeploymentHistoryItem {
    export interface Raw {
        id: string;
        deployment_id: string;
        timestamp: string;
        label: string;
        name: string;
        input_variables: VellumVariable.Raw[];
        description?: string | null;
    }
}
