/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../index";
import * as Vellum from "../../../api/index";
import * as core from "../../../core";
import { WorkflowRequestInputRequest } from "../../types/WorkflowRequestInputRequest";
import { WorkflowExpandMetaRequest } from "../../types/WorkflowExpandMetaRequest";
import { WorkflowExecutionEventType } from "../../types/WorkflowExecutionEventType";

export const ExecuteWorkflowStreamRequest: core.serialization.Schema<
    serializers.ExecuteWorkflowStreamRequest.Raw,
    Vellum.ExecuteWorkflowStreamRequest
> = core.serialization.object({
    inputs: core.serialization.list(WorkflowRequestInputRequest),
    expandMeta: core.serialization.property("expand_meta", WorkflowExpandMetaRequest.optional()),
    workflowDeploymentId: core.serialization.property("workflow_deployment_id", core.serialization.string().optional()),
    workflowDeploymentName: core.serialization.property(
        "workflow_deployment_name",
        core.serialization.string().optional(),
    ),
    releaseTag: core.serialization.property("release_tag", core.serialization.string().optional()),
    externalId: core.serialization.property("external_id", core.serialization.string().optional()),
    eventTypes: core.serialization.property(
        "event_types",
        core.serialization.list(WorkflowExecutionEventType).optional(),
    ),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace ExecuteWorkflowStreamRequest {
    export interface Raw {
        inputs: WorkflowRequestInputRequest.Raw[];
        expand_meta?: WorkflowExpandMetaRequest.Raw | null;
        workflow_deployment_id?: string | null;
        workflow_deployment_name?: string | null;
        release_tag?: string | null;
        external_id?: string | null;
        event_types?: WorkflowExecutionEventType.Raw[] | null;
        metadata?: Record<string, unknown> | null;
    }
}
