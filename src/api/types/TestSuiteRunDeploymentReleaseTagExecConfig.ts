/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * Execution configuration for running a Test Suite against a Prompt Deployment
 */
export interface TestSuiteRunDeploymentReleaseTagExecConfig {
    data: Vellum.TestSuiteRunDeploymentReleaseTagExecConfigData;
    /** Optionally specify a subset of test case ids to run. If not provided, all test cases within the test suite will be run by default. */
    testCaseIds?: string[];
}
