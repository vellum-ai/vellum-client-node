/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TestCaseJsonVariableValue: core.serialization.ObjectSchema<
    serializers.TestCaseJsonVariableValue.Raw,
    Vellum.TestCaseJsonVariableValue
> = core.serialization.object({
    variableId: core.serialization.property("variable_id", core.serialization.string()),
    name: core.serialization.string().optional(),
    type: core.serialization.stringLiteral("JSON"),
    value: core.serialization.unknown(),
});

export declare namespace TestCaseJsonVariableValue {
    export interface Raw {
        variable_id: string;
        name?: string | null;
        type: "JSON";
        value?: unknown;
    }
}
