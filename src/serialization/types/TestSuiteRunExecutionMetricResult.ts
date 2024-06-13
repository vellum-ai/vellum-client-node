/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { TestSuiteRunMetricOutput } from "./TestSuiteRunMetricOutput";
import { TestSuiteRunExecutionMetricDefinition } from "./TestSuiteRunExecutionMetricDefinition";

export const TestSuiteRunExecutionMetricResult: core.serialization.ObjectSchema<
    serializers.TestSuiteRunExecutionMetricResult.Raw,
    Vellum.TestSuiteRunExecutionMetricResult
> = core.serialization.object({
    metricId: core.serialization.property("metric_id", core.serialization.string()),
    outputs: core.serialization.list(TestSuiteRunMetricOutput),
    metricLabel: core.serialization.property("metric_label", core.serialization.string().optional()),
    metricDefinition: core.serialization.property(
        "metric_definition",
        TestSuiteRunExecutionMetricDefinition.optional()
    ),
});

export declare namespace TestSuiteRunExecutionMetricResult {
    interface Raw {
        metric_id: string;
        outputs: TestSuiteRunMetricOutput.Raw[];
        metric_label?: string | null;
        metric_definition?: TestSuiteRunExecutionMetricDefinition.Raw | null;
    }
}
