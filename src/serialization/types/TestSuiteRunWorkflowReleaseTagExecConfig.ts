/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { TestSuiteRunWorkflowReleaseTagExecConfigData } from "./TestSuiteRunWorkflowReleaseTagExecConfigData";

export const TestSuiteRunWorkflowReleaseTagExecConfig: core.serialization.ObjectSchema<
    serializers.TestSuiteRunWorkflowReleaseTagExecConfig.Raw,
    Vellum.TestSuiteRunWorkflowReleaseTagExecConfig
> = core.serialization.object({
    data: TestSuiteRunWorkflowReleaseTagExecConfigData,
    testCaseIds: core.serialization.property(
        "test_case_ids",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace TestSuiteRunWorkflowReleaseTagExecConfig {
    interface Raw {
        data: TestSuiteRunWorkflowReleaseTagExecConfigData.Raw;
        test_case_ids?: string[] | null;
    }
}
