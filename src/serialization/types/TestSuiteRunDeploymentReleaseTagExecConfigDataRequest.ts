/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TestSuiteRunDeploymentReleaseTagExecConfigDataRequest: core.serialization.ObjectSchema<
    serializers.TestSuiteRunDeploymentReleaseTagExecConfigDataRequest.Raw,
    Vellum.TestSuiteRunDeploymentReleaseTagExecConfigDataRequest
> = core.serialization.object({
    deploymentId: core.serialization.property("deployment_id", core.serialization.string()),
    tag: core.serialization.string().optional(),
});

export declare namespace TestSuiteRunDeploymentReleaseTagExecConfigDataRequest {
    interface Raw {
        deployment_id: string;
        tag?: string | null;
    }
}
