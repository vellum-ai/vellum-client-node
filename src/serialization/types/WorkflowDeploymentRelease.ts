/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ReleaseEnvironment } from "./ReleaseEnvironment";
import { ReleaseCreatedBy } from "./ReleaseCreatedBy";
import { WorkflowDeploymentReleaseWorkflowVersion } from "./WorkflowDeploymentReleaseWorkflowVersion";
import { WorkflowDeploymentReleaseWorkflowDeployment } from "./WorkflowDeploymentReleaseWorkflowDeployment";
import { ReleaseReleaseTag } from "./ReleaseReleaseTag";
import { SlimReleaseReview } from "./SlimReleaseReview";

export const WorkflowDeploymentRelease: core.serialization.ObjectSchema<
    serializers.WorkflowDeploymentRelease.Raw,
    Vellum.WorkflowDeploymentRelease
> = core.serialization.object({
    id: core.serialization.string().optional(),
    created: core.serialization.date().optional(),
    environment: ReleaseEnvironment,
    createdBy: core.serialization.property("created_by", ReleaseCreatedBy.optionalNullable()),
    workflowVersion: core.serialization.property("workflow_version", WorkflowDeploymentReleaseWorkflowVersion),
    deployment: WorkflowDeploymentReleaseWorkflowDeployment,
    description: core.serialization.string().optional(),
    releaseTags: core.serialization.property("release_tags", core.serialization.list(ReleaseReleaseTag)),
    reviews: core.serialization.list(SlimReleaseReview),
});

export declare namespace WorkflowDeploymentRelease {
    export interface Raw {
        id?: string | null;
        created?: string | null;
        environment: ReleaseEnvironment.Raw;
        created_by?: (ReleaseCreatedBy.Raw | null) | null;
        workflow_version: WorkflowDeploymentReleaseWorkflowVersion.Raw;
        deployment: WorkflowDeploymentReleaseWorkflowDeployment.Raw;
        description?: string | null;
        release_tags: ReleaseReleaseTag.Raw[];
        reviews: SlimReleaseReview.Raw[];
    }
}
