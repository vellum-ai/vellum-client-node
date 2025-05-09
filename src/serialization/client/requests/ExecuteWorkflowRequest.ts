/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../index";
import * as Vellum from "../../../api/index";
import * as core from "../../../core";
import { WorkflowRequestInputRequest } from "../../types/WorkflowRequestInputRequest";
import { WorkflowExpandMetaRequest } from "../../types/WorkflowExpandMetaRequest";

export const ExecuteWorkflowRequest: core.serialization.Schema<
    serializers.ExecuteWorkflowRequest.Raw,
    Vellum.ExecuteWorkflowRequest
> = core.serialization.object({
    inputs: core.serialization.list(WorkflowRequestInputRequest),
    expandMeta: core.serialization.property("expand_meta", WorkflowExpandMetaRequest.optionalNullable()),
    workflowDeploymentId: core.serialization.property(
        "workflow_deployment_id",
        core.serialization.string().optionalNullable(),
    ),
    workflowDeploymentName: core.serialization.property(
        "workflow_deployment_name",
        core.serialization.string().optionalNullable(),
    ),
    releaseTag: core.serialization.property("release_tag", core.serialization.string().optionalNullable()),
    externalId: core.serialization.property("external_id", core.serialization.string().optionalNullable()),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optionalNullable(),
});

export declare namespace ExecuteWorkflowRequest {
    export interface Raw {
        inputs: WorkflowRequestInputRequest.Raw[];
        expand_meta?: (WorkflowExpandMetaRequest.Raw | null) | null;
        workflow_deployment_id?: (string | null) | null;
        workflow_deployment_name?: (string | null) | null;
        release_tag?: (string | null) | null;
        external_id?: (string | null) | null;
        metadata?: (Record<string, unknown> | null) | null;
    }
}
