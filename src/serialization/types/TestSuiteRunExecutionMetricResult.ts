/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TestSuiteRunExecutionMetricResult: core.serialization.ObjectSchema<
    serializers.TestSuiteRunExecutionMetricResult.Raw,
    Vellum.TestSuiteRunExecutionMetricResult
> = core.serialization.object({
    metricId: core.serialization.property("metric_id", core.serialization.string()),
    outputs: core.serialization.list(
        core.serialization.lazy(async () => (await import("..")).TestSuiteRunMetricOutput)
    ),
});

export declare namespace TestSuiteRunExecutionMetricResult {
    interface Raw {
        metric_id: string;
        outputs: serializers.TestSuiteRunMetricOutput.Raw[];
    }
}