/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TestSuiteRunDeploymentReleaseTagExecConfigTypeEnum: core.serialization.Schema<
    serializers.TestSuiteRunDeploymentReleaseTagExecConfigTypeEnum.Raw,
    Vellum.TestSuiteRunDeploymentReleaseTagExecConfigTypeEnum
> = core.serialization.stringLiteral("DEPLOYMENT_RELEASE_TAG");

export declare namespace TestSuiteRunDeploymentReleaseTagExecConfigTypeEnum {
    type Raw = "DEPLOYMENT_RELEASE_TAG";
}