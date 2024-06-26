/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FunctionCall } from "./FunctionCall";

export const NamedTestCaseFunctionCallVariableValue: core.serialization.ObjectSchema<
    serializers.NamedTestCaseFunctionCallVariableValue.Raw,
    Vellum.NamedTestCaseFunctionCallVariableValue
> = core.serialization.object({
    value: FunctionCall.optional(),
    name: core.serialization.string(),
});

export declare namespace NamedTestCaseFunctionCallVariableValue {
    interface Raw {
        value?: FunctionCall.Raw | null;
        name: string;
    }
}
