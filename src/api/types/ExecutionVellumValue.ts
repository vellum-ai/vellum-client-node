/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export type ExecutionVellumValue =
    | Vellum.ExecutionVellumValue.String
    | Vellum.ExecutionVellumValue.Number
    | Vellum.ExecutionVellumValue.Json
    | Vellum.ExecutionVellumValue.ChatHistory
    | Vellum.ExecutionVellumValue.SearchResults
    | Vellum.ExecutionVellumValue.Error_
    | Vellum.ExecutionVellumValue.Array
    | Vellum.ExecutionVellumValue.FunctionCall;

export declare namespace ExecutionVellumValue {
    interface String extends Vellum.ExecutionStringVellumValue {
        type: "STRING";
    }

    interface Number extends Vellum.ExecutionNumberVellumValue {
        type: "NUMBER";
    }

    interface Json extends Vellum.ExecutionJsonVellumValue {
        type: "JSON";
    }

    interface ChatHistory extends Vellum.ExecutionChatHistoryVellumValue {
        type: "CHAT_HISTORY";
    }

    interface SearchResults extends Vellum.ExecutionSearchResultsVellumValue {
        type: "SEARCH_RESULTS";
    }

    interface Error_ extends Vellum.ExecutionErrorVellumValue {
        type: "ERROR";
    }

    interface Array extends Vellum.ExecutionArrayVellumValue {
        type: "ARRAY";
    }

    interface FunctionCall extends Vellum.ExecutionFunctionCallVellumValue {
        type: "FUNCTION_CALL";
    }
}