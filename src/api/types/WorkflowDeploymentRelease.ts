/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface WorkflowDeploymentRelease {
    id: string;
    created: Date;
    environment: Vellum.ReleaseEnvironment;
    createdBy?: Vellum.ReleaseCreatedBy;
    workflowVersion: Vellum.WorkflowDeploymentReleaseWorkflowVersion;
    deployment: Vellum.WorkflowDeploymentReleaseWorkflowDeployment;
    description?: string;
    releaseTags: Vellum.ReleaseReleaseTag[];
    reviews: Vellum.SlimReleaseReview[];
}
