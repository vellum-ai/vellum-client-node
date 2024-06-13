/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type ArrayVariableValueItem =
    | Vellum.ArrayVariableValueItem.String
    | Vellum.ArrayVariableValueItem.Number
    | Vellum.ArrayVariableValueItem.Json
    | Vellum.ArrayVariableValueItem.Error_
    | Vellum.ArrayVariableValueItem.FunctionCall
    | Vellum.ArrayVariableValueItem.Image;

export declare namespace ArrayVariableValueItem {
    interface String extends Vellum.StringVariableValue {
        type: "STRING";
    }

    interface Number extends Vellum.NumberVariableValue {
        type: "NUMBER";
    }

    interface Json extends Vellum.JsonVariableValue {
        type: "JSON";
    }

    interface Error_ extends Vellum.ErrorVariableValue {
        type: "ERROR";
    }

    interface FunctionCall extends Vellum.FunctionCallVariableValue {
        type: "FUNCTION_CALL";
    }

    interface Image extends Vellum.ImageVariableValue {
        type: "IMAGE";
    }
}
