/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { StringVellumValueRequest } from "./StringVellumValueRequest";
import { NumberVellumValueRequest } from "./NumberVellumValueRequest";
import { JsonVellumValueRequest } from "./JsonVellumValueRequest";
import { ImageVellumValueRequest } from "./ImageVellumValueRequest";
import { FunctionCallVellumValueRequest } from "./FunctionCallVellumValueRequest";
import { ErrorVellumValueRequest } from "./ErrorVellumValueRequest";

export const ArrayVellumValueItemRequest: core.serialization.Schema<
    serializers.ArrayVellumValueItemRequest.Raw,
    Vellum.ArrayVellumValueItemRequest
> = core.serialization
    .union("type", {
        STRING: StringVellumValueRequest,
        NUMBER: NumberVellumValueRequest,
        JSON: JsonVellumValueRequest,
        IMAGE: ImageVellumValueRequest,
        FUNCTION_CALL: FunctionCallVellumValueRequest,
        ERROR: ErrorVellumValueRequest,
    })
    .transform<Vellum.ArrayVellumValueItemRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ArrayVellumValueItemRequest {
    type Raw =
        | ArrayVellumValueItemRequest.String
        | ArrayVellumValueItemRequest.Number
        | ArrayVellumValueItemRequest.Json
        | ArrayVellumValueItemRequest.Image
        | ArrayVellumValueItemRequest.FunctionCall
        | ArrayVellumValueItemRequest.Error;

    interface String extends StringVellumValueRequest.Raw {
        type: "STRING";
    }

    interface Number extends NumberVellumValueRequest.Raw {
        type: "NUMBER";
    }

    interface Json extends JsonVellumValueRequest.Raw {
        type: "JSON";
    }

    interface Image extends ImageVellumValueRequest.Raw {
        type: "IMAGE";
    }

    interface FunctionCall extends FunctionCallVellumValueRequest.Raw {
        type: "FUNCTION_CALL";
    }

    interface Error extends ErrorVellumValueRequest.Raw {
        type: "ERROR";
    }
}
