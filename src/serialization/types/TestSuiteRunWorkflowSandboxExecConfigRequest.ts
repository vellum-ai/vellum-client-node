/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { TestSuiteRunWorkflowSandboxExecConfigDataRequest } from "./TestSuiteRunWorkflowSandboxExecConfigDataRequest";

export const TestSuiteRunWorkflowSandboxExecConfigRequest: core.serialization.ObjectSchema<
    serializers.TestSuiteRunWorkflowSandboxExecConfigRequest.Raw,
    Vellum.TestSuiteRunWorkflowSandboxExecConfigRequest
> = core.serialization.object({
    type: core.serialization.stringLiteral("WORKFLOW_SANDBOX"),
    data: TestSuiteRunWorkflowSandboxExecConfigDataRequest,
    testCaseIds: core.serialization.property(
        "test_case_ids",
        core.serialization.list(core.serialization.string()).optional(),
    ),
});

export declare namespace TestSuiteRunWorkflowSandboxExecConfigRequest {
    export interface Raw {
        type: "WORKFLOW_SANDBOX";
        data: TestSuiteRunWorkflowSandboxExecConfigDataRequest.Raw;
        test_case_ids?: string[] | null;
    }
}
