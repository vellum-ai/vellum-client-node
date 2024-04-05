/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { VellumImage } from "./VellumImage";

export const ImageVariableValue: core.serialization.ObjectSchema<
    serializers.ImageVariableValue.Raw,
    Vellum.ImageVariableValue
> = core.serialization.object({
    value: VellumImage.optional(),
});

export declare namespace ImageVariableValue {
    interface Raw {
        value?: VellumImage.Raw | null;
    }
}
