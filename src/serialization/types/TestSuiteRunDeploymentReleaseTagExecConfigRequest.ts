/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TestSuiteRunDeploymentReleaseTagExecConfigRequest: core.serialization.ObjectSchema<
    serializers.TestSuiteRunDeploymentReleaseTagExecConfigRequest.Raw,
    Vellum.TestSuiteRunDeploymentReleaseTagExecConfigRequest
> = core.serialization.object({
    data: core.serialization.lazyObject(
        async () => (await import("..")).TestSuiteRunDeploymentReleaseTagExecConfigDataRequest
    ),
    testCaseIds: core.serialization.property(
        "test_case_ids",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace TestSuiteRunDeploymentReleaseTagExecConfigRequest {
    interface Raw {
        data: serializers.TestSuiteRunDeploymentReleaseTagExecConfigDataRequest.Raw;
        test_case_ids?: string[] | null;
    }
}