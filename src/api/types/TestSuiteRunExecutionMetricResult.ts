/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface TestSuiteRunExecutionMetricResult {
    metricId: string;
    outputs: Vellum.TestSuiteRunMetricOutput[];
    metricLabel?: string;
    metricDefinition?: Vellum.TestSuiteRunExecutionMetricDefinition;
}
