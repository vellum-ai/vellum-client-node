/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface WorkflowDeploymentRead {
    id: string;
    /** A name that uniquely identifies this workflow deployment within its workspace */
    name: string;
    /** A human-readable label for the workflow deployment */
    label: string;
    /**
     * The current status of the workflow deployment
     *
     * - `ACTIVE` - Active
     * - `ARCHIVED` - Archived
     */
    status?: Vellum.EntityStatus;
    /**
     * The environment this workflow deployment is used in
     *
     * - `DEVELOPMENT` - Development
     * - `STAGING` - Staging
     * - `PRODUCTION` - Production
     */
    environment?: Vellum.EnvironmentEnum;
    created: Date;
    lastDeployedOn: Date;
    /** The input variables this Workflow Deployment expects to receive values for when it is executed. */
    inputVariables: Vellum.VellumVariable[];
    /** The output variables this Workflow Deployment produces values for when it's executed. */
    outputVariables: Vellum.VellumVariable[];
}