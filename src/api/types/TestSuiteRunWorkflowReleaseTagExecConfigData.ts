/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TestSuiteRunWorkflowReleaseTagExecConfigData {
    /** The ID of the Workflow Deployment to run the Test Suite against. */
    workflowDeploymentId: string;
    /** A tag identifying which release of the Workflow Deployment to run the Test Suite against. Useful for testing past versions of the Workflow Deployment */
    tag?: string;
}
