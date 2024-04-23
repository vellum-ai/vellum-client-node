/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export type TestCaseVariableValue =
    | Vellum.TestCaseVariableValue.String
    | Vellum.TestCaseVariableValue.Number
    | Vellum.TestCaseVariableValue.Json
    | Vellum.TestCaseVariableValue.ChatHistory
    | Vellum.TestCaseVariableValue.SearchResults
    | Vellum.TestCaseVariableValue.Error_
    | Vellum.TestCaseVariableValue.FunctionCall;

export declare namespace TestCaseVariableValue {
    interface String extends Vellum.TestCaseStringVariableValue {
        type: "STRING";
    }

    interface Number extends Vellum.TestCaseNumberVariableValue {
        type: "NUMBER";
    }

    interface Json extends Vellum.TestCaseJsonVariableValue {
        type: "JSON";
    }

    interface ChatHistory extends Vellum.TestCaseChatHistoryVariableValue {
        type: "CHAT_HISTORY";
    }

    interface SearchResults extends Vellum.TestCaseSearchResultsVariableValue {
        type: "SEARCH_RESULTS";
    }

    interface Error_ extends Vellum.TestCaseErrorVariableValue {
        type: "ERROR";
    }

    interface FunctionCall extends Vellum.TestCaseFunctionCallVariableValue {
        type: "FUNCTION_CALL";
    }
}
