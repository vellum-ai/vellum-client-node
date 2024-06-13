/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type TestSuiteRunMetricOutput =
    | Vellum.TestSuiteRunMetricOutput.String
    | Vellum.TestSuiteRunMetricOutput.Number
    | Vellum.TestSuiteRunMetricOutput.Error_;

export declare namespace TestSuiteRunMetricOutput {
    interface String extends Vellum.TestSuiteRunMetricStringOutput {
        type: "STRING";
    }

    interface Number extends Vellum.TestSuiteRunMetricNumberOutput {
        type: "NUMBER";
    }

    interface Error_ extends Vellum.TestSuiteRunMetricErrorOutput {
        type: "ERROR";
    }
}
