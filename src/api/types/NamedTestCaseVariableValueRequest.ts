/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type NamedTestCaseVariableValueRequest =
    | Vellum.NamedTestCaseVariableValueRequest.String
    | Vellum.NamedTestCaseVariableValueRequest.Number
    | Vellum.NamedTestCaseVariableValueRequest.Json
    | Vellum.NamedTestCaseVariableValueRequest.ChatHistory
    | Vellum.NamedTestCaseVariableValueRequest.SearchResults
    | Vellum.NamedTestCaseVariableValueRequest.Error_
    | Vellum.NamedTestCaseVariableValueRequest.FunctionCall
    | Vellum.NamedTestCaseVariableValueRequest.Array;

export declare namespace NamedTestCaseVariableValueRequest {
    interface String extends Vellum.NamedTestCaseStringVariableValueRequest {
        type: "STRING";
    }

    interface Number extends Vellum.NamedTestCaseNumberVariableValueRequest {
        type: "NUMBER";
    }

    interface Json extends Vellum.NamedTestCaseJsonVariableValueRequest {
        type: "JSON";
    }

    interface ChatHistory extends Vellum.NamedTestCaseChatHistoryVariableValueRequest {
        type: "CHAT_HISTORY";
    }

    interface SearchResults extends Vellum.NamedTestCaseSearchResultsVariableValueRequest {
        type: "SEARCH_RESULTS";
    }

    interface Error_ extends Vellum.NamedTestCaseErrorVariableValueRequest {
        type: "ERROR";
    }

    interface FunctionCall extends Vellum.NamedTestCaseFunctionCallVariableValueRequest {
        type: "FUNCTION_CALL";
    }

    interface Array extends Vellum.NamedTestCaseArrayVariableValueRequest {
        type: "ARRAY";
    }
}
