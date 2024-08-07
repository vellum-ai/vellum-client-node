/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type ArrayVellumValueItemRequest =
    | Vellum.ArrayVellumValueItemRequest.String
    | Vellum.ArrayVellumValueItemRequest.Number
    | Vellum.ArrayVellumValueItemRequest.Json
    | Vellum.ArrayVellumValueItemRequest.Image
    | Vellum.ArrayVellumValueItemRequest.FunctionCall
    | Vellum.ArrayVellumValueItemRequest.Error_;

export declare namespace ArrayVellumValueItemRequest {
    interface String extends Vellum.StringVellumValueRequest {
        type: "STRING";
    }

    interface Number extends Vellum.NumberVellumValueRequest {
        type: "NUMBER";
    }

    interface Json extends Vellum.JsonVellumValueRequest {
        type: "JSON";
    }

    interface Image extends Vellum.ImageVellumValueRequest {
        type: "IMAGE";
    }

    interface FunctionCall extends Vellum.FunctionCallVellumValueRequest {
        type: "FUNCTION_CALL";
    }

    interface Error_ extends Vellum.ErrorVellumValueRequest {
        type: "ERROR";
    }
}
