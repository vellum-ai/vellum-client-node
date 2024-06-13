/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TestSuiteRunDeploymentReleaseTagExecConfigData: core.serialization.ObjectSchema<
    serializers.TestSuiteRunDeploymentReleaseTagExecConfigData.Raw,
    Vellum.TestSuiteRunDeploymentReleaseTagExecConfigData
> = core.serialization.object({
    deploymentId: core.serialization.property("deployment_id", core.serialization.string()),
    tag: core.serialization.string().optional(),
});

export declare namespace TestSuiteRunDeploymentReleaseTagExecConfigData {
    interface Raw {
        deployment_id: string;
        tag?: string | null;
    }
}
