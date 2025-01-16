/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const ScenarioInputJsonVariableValue: core.serialization.ObjectSchema<
    serializers.ScenarioInputJsonVariableValue.Raw,
    Vellum.ScenarioInputJsonVariableValue
> = core.serialization.object({
    type: core.serialization.stringLiteral("JSON"),
    value: core.serialization.unknown(),
    inputVariableId: core.serialization.property("input_variable_id", core.serialization.string()),
});

export declare namespace ScenarioInputJsonVariableValue {
    export interface Raw {
        type: "JSON";
        value?: unknown;
        input_variable_id: string;
    }
}
