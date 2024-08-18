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
> = core.serialization.undiscriminatedUnion([
    StringVellumValue,
    NumberVellumValue,
    JsonVellumValue,
    ImageVellumValue,
    FunctionCallVellumValue,
    ErrorVellumValue,
]);

export declare namespace ArrayVellumValueItem {
    type Raw =
        | StringVellumValue.Raw
        | NumberVellumValue.Raw
        | JsonVellumValue.Raw
        | ImageVellumValue.Raw
        | FunctionCallVellumValue.Raw
        | ErrorVellumValue.Raw;
}
