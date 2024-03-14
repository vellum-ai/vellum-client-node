/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ExecutionNumberVellumValue: core.serialization.ObjectSchema<
    serializers.ExecutionNumberVellumValue.Raw,
    Vellum.ExecutionNumberVellumValue
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    value: core.serialization.number().optional(),
});

export declare namespace ExecutionNumberVellumValue {
    interface Raw {
        id: string;
        name: string;
        value?: number | null;
    }
}
