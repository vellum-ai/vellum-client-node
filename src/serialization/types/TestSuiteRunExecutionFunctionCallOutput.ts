/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FunctionCall } from "./FunctionCall";

export const TestSuiteRunExecutionFunctionCallOutput: core.serialization.ObjectSchema<
    serializers.TestSuiteRunExecutionFunctionCallOutput.Raw,
    Vellum.TestSuiteRunExecutionFunctionCallOutput
> = core.serialization.object({
    name: core.serialization.string(),
    value: FunctionCall.optional(),
    outputVariableId: core.serialization.property("output_variable_id", core.serialization.string()),
});

export declare namespace TestSuiteRunExecutionFunctionCallOutput {
    interface Raw {
        name: string;
        value?: FunctionCall.Raw | null;
        output_variable_id: string;
    }
}
