/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ArrayVellumValueItem } from "./ArrayVellumValueItem";

export const TestSuiteRunExecutionArrayOutput: core.serialization.ObjectSchema<
    serializers.TestSuiteRunExecutionArrayOutput.Raw,
    Vellum.TestSuiteRunExecutionArrayOutput
> = core.serialization.object({
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("ARRAY"),
    value: core.serialization.list(ArrayVellumValueItem).optional(),
    outputVariableId: core.serialization.property("output_variable_id", core.serialization.string()),
});

export declare namespace TestSuiteRunExecutionArrayOutput {
    interface Raw {
        name: string;
        type: "ARRAY";
        value?: ArrayVellumValueItem.Raw[] | null;
        output_variable_id: string;
    }
}
