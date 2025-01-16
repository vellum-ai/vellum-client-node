/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumImage } from "./VellumImage";

export const ImageVellumValue: core.serialization.ObjectSchema<
    serializers.ImageVellumValue.Raw,
    Vellum.ImageVellumValue
> = core.serialization.object({
    type: core.serialization.stringLiteral("IMAGE"),
    value: VellumImage.optional(),
});

export declare namespace ImageVellumValue {
    export interface Raw {
        type: "IMAGE";
        value?: VellumImage.Raw | null;
    }
}
