/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { TestSuiteRunExecutionOutput } from "./TestSuiteRunExecutionOutput";
import { TestSuiteRunExecutionMetricResult } from "./TestSuiteRunExecutionMetricResult";

export const TestSuiteRunExecution: core.serialization.ObjectSchema<
    serializers.TestSuiteRunExecution.Raw,
    Vellum.TestSuiteRunExecution
> = core.serialization.object({
    id: core.serialization.string(),
    testCaseId: core.serialization.property("test_case_id", core.serialization.string()),
    outputs: core.serialization.list(TestSuiteRunExecutionOutput),
    metricResults: core.serialization.property(
        "metric_results",
        core.serialization.list(TestSuiteRunExecutionMetricResult)
    ),
});

export declare namespace TestSuiteRunExecution {
    interface Raw {
        id: string;
        test_case_id: string;
        outputs: TestSuiteRunExecutionOutput.Raw[];
        metric_results: TestSuiteRunExecutionMetricResult.Raw[];
    }
}
