/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const FunctionCallVariableValue: core.serialization.ObjectSchema<
    serializers.FunctionCallVariableValue.Raw,
    Vellum.FunctionCallVariableValue
> = core.serialization.object({
    value: core.serialization.lazy(async () => (await import("..")).FunctionCall),
});

export declare namespace FunctionCallVariableValue {
    interface Raw {
        value: serializers.FunctionCall.Raw;
    }
}