/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export type CodeExecutionNodeResultOutput =
    | Vellum.CodeExecutionNodeResultOutput.String
    | Vellum.CodeExecutionNodeResultOutput.Number
    | Vellum.CodeExecutionNodeResultOutput.Json
    | Vellum.CodeExecutionNodeResultOutput.ChatHistory
    | Vellum.CodeExecutionNodeResultOutput.SearchResults
    | Vellum.CodeExecutionNodeResultOutput.Error_
    | Vellum.CodeExecutionNodeResultOutput.Array
    | Vellum.CodeExecutionNodeResultOutput.FunctionCall;

export declare namespace CodeExecutionNodeResultOutput {
    interface String extends Vellum.CodeExecutionNodeStringResult {
        type: "STRING";
    }

    interface Number extends Vellum.CodeExecutionNodeNumberResult {
        type: "NUMBER";
    }

    interface Json extends Vellum.CodeExecutionNodeJsonResult {
        type: "JSON";
    }

    interface ChatHistory extends Vellum.CodeExecutionNodeChatHistoryResult {
        type: "CHAT_HISTORY";
    }

    interface SearchResults extends Vellum.CodeExecutionNodeSearchResultsResult {
        type: "SEARCH_RESULTS";
    }

    interface Error_ extends Vellum.CodeExecutionNodeErrorResult {
        type: "ERROR";
    }

    interface Array extends Vellum.CodeExecutionNodeArrayResult {
        type: "ARRAY";
    }

    interface FunctionCall extends Vellum.CodeExecutionNodeFunctionCallResult {
        type: "FUNCTION_CALL";
    }
}
