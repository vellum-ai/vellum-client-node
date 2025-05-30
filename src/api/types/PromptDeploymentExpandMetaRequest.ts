/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface PromptDeploymentExpandMetaRequest {
    /** If enabled, the response will include the model identifier representing the ML Model invoked by the Prompt. */
    modelName?: boolean | null;
    /** If enabled, the response will include model host usage tracking. This may increase latency for some model hosts. */
    usage?: boolean | null;
    /** If enabled, the response will include model host cost tracking. This may increase latency for some model hosts. */
    cost?: boolean | null;
    /** If enabled, the response will include the reason provided by the model for why the execution finished. */
    finishReason?: boolean | null;
    /** If enabled, the response will include the time in nanoseconds it took to execute the Prompt Deployment. */
    latency?: boolean | null;
    /** If enabled, the response will include the release tag of the Prompt Deployment. */
    deploymentReleaseTag?: boolean | null;
    /** If enabled, the response will include the ID of the Prompt Version backing the deployment. */
    promptVersionId?: boolean | null;
}
