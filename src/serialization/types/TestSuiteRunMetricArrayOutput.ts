/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TestSuiteRunMetricArrayOutput: core.serialization.ObjectSchema<
    serializers.TestSuiteRunMetricArrayOutput.Raw,
    Vellum.TestSuiteRunMetricArrayOutput
> = core.serialization.object({
    value: core.serialization.list(core.serialization.lazy(() => serializers.VellumValue)).optionalNullable(),
    type: core.serialization.stringLiteral("ARRAY"),
    name: core.serialization.string(),
});

export declare namespace TestSuiteRunMetricArrayOutput {
    export interface Raw {
        value?: (serializers.VellumValue.Raw[] | null) | null;
        type: "ARRAY";
        name: string;
    }
}
