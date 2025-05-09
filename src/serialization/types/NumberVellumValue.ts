/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const NumberVellumValue: core.serialization.ObjectSchema<
    serializers.NumberVellumValue.Raw,
    Vellum.NumberVellumValue
> = core.serialization.object({
    type: core.serialization.stringLiteral("NUMBER"),
    value: core.serialization.number().optionalNullable(),
});

export declare namespace NumberVellumValue {
    export interface Raw {
        type: "NUMBER";
        value?: (number | null) | null;
    }
}
