/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface WorkflowDeploymentParentContext {
    parent?: Vellum.ParentContext;
    links?: Vellum.SpanLink[];
    type: "WORKFLOW_RELEASE_TAG";
    spanId: string;
    deploymentId: string;
    deploymentName: string;
    deploymentHistoryItemId: string;
    releaseTagId: string;
    releaseTagName: string;
    externalId?: string;
    metadata?: Record<string, unknown>;
    workflowVersionId: string;
}
