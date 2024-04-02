/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TestSuiteRunMetricErrorOutput: core.serialization.ObjectSchema<
    serializers.TestSuiteRunMetricErrorOutput.Raw,
    Vellum.TestSuiteRunMetricErrorOutput
> = core.serialization.object({
    value: core.serialization.lazyObject(async () => (await import("..")).VellumError),
    name: core.serialization.string(),
});

export declare namespace TestSuiteRunMetricErrorOutput {
    interface Raw {
        value: serializers.VellumError.Raw;
        name: string;
    }
}
