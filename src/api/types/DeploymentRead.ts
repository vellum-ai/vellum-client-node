/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface DeploymentRead {
    id: string;
    created: Date;
    /** A human-readable label for the deployment */
    label: string;
    /** A name that uniquely identifies this deployment within its workspace */
    name: string;
    /**
     * The current status of the deployment
     *
     * * `ACTIVE` - Active
     * * `ARCHIVED` - Archived
     */
    status?: Vellum.EntityStatus;
    /**
     * The environment this deployment is used in
     *
     * * `DEVELOPMENT` - Development
     * * `STAGING` - Staging
     * * `PRODUCTION` - Production
     */
    environment?: Vellum.EnvironmentEnum;
    lastDeployedOn: Date;
    inputVariables: Vellum.VellumVariable[];
    /** A human-readable description of the deployment */
    description?: string;
    /** Deprecated. The Prompt execution endpoints return a `prompt_version_id` that could be used instead. */
    activeModelVersionIds: string[];
    /** The ID of the history item associated with this Deployment's LATEST Release Tag */
    lastDeployedHistoryItemId: string;
}
