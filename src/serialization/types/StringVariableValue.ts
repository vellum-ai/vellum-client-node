/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const StringVariableValue: core.serialization.ObjectSchema<
    serializers.StringVariableValue.Raw,
    Vellum.StringVariableValue
> = core.serialization.object({
    value: core.serialization.string().optional(),
});

export declare namespace StringVariableValue {
    interface Raw {
        value?: string | null;
    }
}
