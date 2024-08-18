/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TestSuiteRunExecutionJsonOutput: core.serialization.ObjectSchema<
    serializers.TestSuiteRunExecutionJsonOutput.Raw,
    Vellum.TestSuiteRunExecutionJsonOutput
> = core.serialization.object({
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("JSON"),
    value: core.serialization.unknown(),
    outputVariableId: core.serialization.property("output_variable_id", core.serialization.string()),
});

export declare namespace TestSuiteRunExecutionJsonOutput {
    interface Raw {
        name: string;
        type: "JSON";
        value?: unknown;
        output_variable_id: string;
    }
}
