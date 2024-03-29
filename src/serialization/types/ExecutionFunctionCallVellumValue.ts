/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ExecutionFunctionCallVellumValue: core.serialization.ObjectSchema<
    serializers.ExecutionFunctionCallVellumValue.Raw,
    Vellum.ExecutionFunctionCallVellumValue
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    value: core.serialization.lazy(async () => (await import("..")).FunctionCall).optional(),
});

export declare namespace ExecutionFunctionCallVellumValue {
    interface Raw {
        id: string;
        name: string;
        value?: serializers.FunctionCall.Raw | null;
    }
}
