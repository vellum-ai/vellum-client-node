/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TestSuiteRunMetricNumberOutput: core.serialization.ObjectSchema<
    serializers.TestSuiteRunMetricNumberOutput.Raw,
    Vellum.TestSuiteRunMetricNumberOutput
> = core.serialization.object({
    value: core.serialization.number().optional(),
    type: core.serialization.stringLiteral("NUMBER"),
    name: core.serialization.string(),
});

export declare namespace TestSuiteRunMetricNumberOutput {
    export interface Raw {
        value?: number | null;
        type: "NUMBER";
        name: string;
    }
}
