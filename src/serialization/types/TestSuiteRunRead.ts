/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { TestSuiteRunTestSuite } from "./TestSuiteRunTestSuite";
import { TestSuiteRunState } from "./TestSuiteRunState";
import { TestSuiteRunExecConfig } from "./TestSuiteRunExecConfig";
import { TestSuiteRunProgress } from "./TestSuiteRunProgress";

export const TestSuiteRunRead: core.serialization.ObjectSchema<
    serializers.TestSuiteRunRead.Raw,
    Vellum.TestSuiteRunRead
> = core.serialization.object({
    id: core.serialization.string(),
    created: core.serialization.date(),
    testSuite: core.serialization.property("test_suite", TestSuiteRunTestSuite),
    state: TestSuiteRunState,
    execConfig: core.serialization.property("exec_config", TestSuiteRunExecConfig.optionalNullable()),
    progress: TestSuiteRunProgress.optional(),
});

export declare namespace TestSuiteRunRead {
    export interface Raw {
        id: string;
        created: string;
        test_suite: TestSuiteRunTestSuite.Raw;
        state: TestSuiteRunState.Raw;
        exec_config?: (TestSuiteRunExecConfig.Raw | null) | null;
        progress?: TestSuiteRunProgress.Raw | null;
    }
}
