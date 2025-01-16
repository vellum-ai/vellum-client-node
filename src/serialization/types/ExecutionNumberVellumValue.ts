/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const ExecutionNumberVellumValue: core.serialization.ObjectSchema<
    serializers.ExecutionNumberVellumValue.Raw,
    Vellum.ExecutionNumberVellumValue
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("NUMBER"),
    value: core.serialization.number().optional(),
});

export declare namespace ExecutionNumberVellumValue {
    export interface Raw {
        id: string;
        name: string;
        type: "NUMBER";
        value?: number | null;
    }
}
