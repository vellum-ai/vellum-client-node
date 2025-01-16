/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const NamedTestCaseNumberVariableValue: core.serialization.ObjectSchema<
    serializers.NamedTestCaseNumberVariableValue.Raw,
    Vellum.NamedTestCaseNumberVariableValue
> = core.serialization.object({
    type: core.serialization.stringLiteral("NUMBER"),
    value: core.serialization.number().optional(),
    name: core.serialization.string(),
});

export declare namespace NamedTestCaseNumberVariableValue {
    export interface Raw {
        type: "NUMBER";
        value?: number | null;
        name: string;
    }
}
