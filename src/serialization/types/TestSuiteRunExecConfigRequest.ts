/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { TestSuiteRunDeploymentReleaseTagExecConfigRequest } from "./TestSuiteRunDeploymentReleaseTagExecConfigRequest";
import { TestSuiteRunWorkflowReleaseTagExecConfigRequest } from "./TestSuiteRunWorkflowReleaseTagExecConfigRequest";
import { TestSuiteRunExternalExecConfigRequest } from "./TestSuiteRunExternalExecConfigRequest";

export const TestSuiteRunExecConfigRequest: core.serialization.Schema<
    serializers.TestSuiteRunExecConfigRequest.Raw,
    Vellum.TestSuiteRunExecConfigRequest
> = core.serialization.undiscriminatedUnion([
    TestSuiteRunDeploymentReleaseTagExecConfigRequest,
    TestSuiteRunWorkflowReleaseTagExecConfigRequest,
    TestSuiteRunExternalExecConfigRequest,
]);

export declare namespace TestSuiteRunExecConfigRequest {
    type Raw =
        | TestSuiteRunDeploymentReleaseTagExecConfigRequest.Raw
        | TestSuiteRunWorkflowReleaseTagExecConfigRequest.Raw
        | TestSuiteRunExternalExecConfigRequest.Raw;
}
