/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import * as Vellum from "../../../api";
import * as core from "../../../core";
import { WorkflowRequestInputRequest } from "../../types/WorkflowRequestInputRequest";

export const ExecuteWorkflowRequest: core.serialization.Schema<
    serializers.ExecuteWorkflowRequest.Raw,
    Vellum.ExecuteWorkflowRequest
> = core.serialization.object({
    inputs: core.serialization.list(WorkflowRequestInputRequest),
    workflowDeploymentId: core.serialization.property("workflow_deployment_id", core.serialization.string().optional()),
    workflowDeploymentName: core.serialization.property(
        "workflow_deployment_name",
        core.serialization.string().optional()
    ),
    releaseTag: core.serialization.property("release_tag", core.serialization.string().optional()),
    externalId: core.serialization.property("external_id", core.serialization.string().optional()),
});

export declare namespace ExecuteWorkflowRequest {
    interface Raw {
        inputs: WorkflowRequestInputRequest.Raw[];
        workflow_deployment_id?: string | null;
        workflow_deployment_name?: string | null;
        release_tag?: string | null;
        external_id?: string | null;
    }
}
