/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { VellumError } from "./VellumError";

export const TestCaseErrorVariableValue: core.serialization.ObjectSchema<
    serializers.TestCaseErrorVariableValue.Raw,
    Vellum.TestCaseErrorVariableValue
> = core.serialization.object({
    variableId: core.serialization.property("variable_id", core.serialization.string()),
    name: core.serialization.string(),
    value: VellumError.optional(),
});

export declare namespace TestCaseErrorVariableValue {
    interface Raw {
        variable_id: string;
        name: string;
        value?: VellumError.Raw | null;
    }
}
