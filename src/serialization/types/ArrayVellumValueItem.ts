/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { StringVellumValue } from "./StringVellumValue";
import { NumberVellumValue } from "./NumberVellumValue";
import { JsonVellumValue } from "./JsonVellumValue";
import { ImageVellumValue } from "./ImageVellumValue";
import { FunctionCallVellumValue } from "./FunctionCallVellumValue";
import { ErrorVellumValue } from "./ErrorVellumValue";

export const ArrayVellumValueItem: core.serialization.Schema<
    serializers.ArrayVellumValueItem.Raw,
    Vellum.ArrayVellumValueItem
> = core.serialization
    .union("type", {
        STRING: StringVellumValue,
        NUMBER: NumberVellumValue,
        JSON: JsonVellumValue,
        IMAGE: ImageVellumValue,
        FUNCTION_CALL: FunctionCallVellumValue,
        ERROR: ErrorVellumValue,
    })
    .transform<Vellum.ArrayVellumValueItem>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ArrayVellumValueItem {
    type Raw =
        | ArrayVellumValueItem.String
        | ArrayVellumValueItem.Number
        | ArrayVellumValueItem.Json
        | ArrayVellumValueItem.Image
        | ArrayVellumValueItem.FunctionCall
        | ArrayVellumValueItem.Error;

    interface String extends StringVellumValue.Raw {
        type: "STRING";
    }

    interface Number extends NumberVellumValue.Raw {
        type: "NUMBER";
    }

    interface Json extends JsonVellumValue.Raw {
        type: "JSON";
    }

    interface Image extends ImageVellumValue.Raw {
        type: "IMAGE";
    }

    interface FunctionCall extends FunctionCallVellumValue.Raw {
        type: "FUNCTION_CALL";
    }

    interface Error extends ErrorVellumValue.Raw {
        type: "ERROR";
    }
}
