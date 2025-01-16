/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumVariable } from "./VellumVariable";

export const WorkflowDeploymentHistoryItem: core.serialization.ObjectSchema<
    serializers.WorkflowDeploymentHistoryItem.Raw,
    Vellum.WorkflowDeploymentHistoryItem
> = core.serialization.object({
    id: core.serialization.string(),
    workflowDeploymentId: core.serialization.property("workflow_deployment_id", core.serialization.string()),
    timestamp: core.serialization.date(),
    label: core.serialization.string(),
    name: core.serialization.string(),
    inputVariables: core.serialization.property("input_variables", core.serialization.list(VellumVariable)),
    outputVariables: core.serialization.property("output_variables", core.serialization.list(VellumVariable)),
    description: core.serialization.string().optional(),
});

export declare namespace WorkflowDeploymentHistoryItem {
    export interface Raw {
        id: string;
        workflow_deployment_id: string;
        timestamp: string;
        label: string;
        name: string;
        input_variables: VellumVariable.Raw[];
        output_variables: VellumVariable.Raw[];
        description?: string | null;
    }
}
