/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const StringVellumValue: core.serialization.ObjectSchema<
    serializers.StringVellumValue.Raw,
    Vellum.StringVellumValue
> = core.serialization.object({
    type: core.serialization.stringLiteral("STRING"),
    value: core.serialization.string().optional(),
});

export declare namespace StringVellumValue {
    export interface Raw {
        type: "STRING";
        value?: string | null;
    }
}
