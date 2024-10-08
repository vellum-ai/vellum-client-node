/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const NumberVariableValue: core.serialization.ObjectSchema<
    serializers.NumberVariableValue.Raw,
    Vellum.NumberVariableValue
> = core.serialization.object({
    type: core.serialization.stringLiteral("NUMBER"),
    value: core.serialization.number().optional(),
});

export declare namespace NumberVariableValue {
    interface Raw {
        type: "NUMBER";
        value?: number | null;
    }
}
