/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../..";

export interface ExecutePromptRequest {
    inputs: Vellum.PromptDeploymentInputRequest[];
    /** The ID of the Prompt Deployment. Must provide either this or prompt_deployment_name. */
    promptDeploymentId?: string;
    /** The name of the Prompt Deployment. Must provide either this or prompt_deployment_id. */
    promptDeploymentName?: string;
    /** Optionally specify a release tag if you want to pin to a specific release of the Prompt Deployment */
    releaseTag?: string;
    externalId?: string;
}
