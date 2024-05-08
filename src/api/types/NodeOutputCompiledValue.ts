/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export type NodeOutputCompiledValue =
    | Vellum.NodeOutputCompiledValue.String
    | Vellum.NodeOutputCompiledValue.Number
    | Vellum.NodeOutputCompiledValue.Json
    | Vellum.NodeOutputCompiledValue.ChatHistory
    | Vellum.NodeOutputCompiledValue.SearchResults
    | Vellum.NodeOutputCompiledValue.Error_
    | Vellum.NodeOutputCompiledValue.Array
    | Vellum.NodeOutputCompiledValue.FunctionCall;

export declare namespace NodeOutputCompiledValue {
    interface String extends Vellum.NodeOutputCompiledStringValue {
        type: "STRING";
    }

    interface Number extends Vellum.NodeOutputCompiledNumberValue {
        type: "NUMBER";
    }

    interface Json extends Vellum.NodeOutputCompiledJsonValue {
        type: "JSON";
    }

    interface ChatHistory extends Vellum.NodeOutputCompiledChatHistoryValue {
        type: "CHAT_HISTORY";
    }

    interface SearchResults extends Vellum.NodeOutputCompiledSearchResultsValue {
        type: "SEARCH_RESULTS";
    }

    interface Error_ extends Vellum.NodeOutputCompiledErrorValue {
        type: "ERROR";
    }

    interface Array extends Vellum.NodeOutputCompiledArrayValue {
        type: "ARRAY";
    }

    interface FunctionCall extends Vellum.NodeOutputCompiledFunctionCallValue {
        type: "FUNCTION_CALL";
    }
}
