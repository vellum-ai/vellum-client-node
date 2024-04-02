/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TestSuiteRunExecutionJsonOutput: core.serialization.ObjectSchema<
    serializers.TestSuiteRunExecutionJsonOutput.Raw,
    Vellum.TestSuiteRunExecutionJsonOutput
> = core.serialization.object({
    outputVariableId: core.serialization.property("output_variable_id", core.serialization.string()),
    value: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace TestSuiteRunExecutionJsonOutput {
    interface Raw {
        output_variable_id: string;
        value?: Record<string, unknown> | null;
    }
}