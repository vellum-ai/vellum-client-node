/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ExecutionErrorVellumValue: core.serialization.ObjectSchema<
    serializers.ExecutionErrorVellumValue.Raw,
    Vellum.ExecutionErrorVellumValue
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    value: core.serialization.lazyObject(async () => (await import("..")).VellumError).optional(),
});

export declare namespace ExecutionErrorVellumValue {
    interface Raw {
        id: string;
        name: string;
        value?: serializers.VellumError.Raw | null;
    }
}