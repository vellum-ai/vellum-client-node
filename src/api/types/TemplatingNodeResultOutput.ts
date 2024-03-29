/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export type TemplatingNodeResultOutput =
    | Vellum.TemplatingNodeResultOutput.String
    | Vellum.TemplatingNodeResultOutput.Number
    | Vellum.TemplatingNodeResultOutput.Json
    | Vellum.TemplatingNodeResultOutput.ChatHistory
    | Vellum.TemplatingNodeResultOutput.SearchResults
    | Vellum.TemplatingNodeResultOutput.Error_;

export declare namespace TemplatingNodeResultOutput {
    interface String extends Vellum.TemplatingNodeStringResult {
        type: "STRING";
    }

    interface Number extends Vellum.TemplatingNodeNumberResult {
        type: "NUMBER";
    }

    interface Json extends Vellum.TemplatingNodeJsonResult {
        type: "JSON";
    }

    interface ChatHistory extends Vellum.TemplatingNodeChatHistoryResult {
        type: "CHAT_HISTORY";
    }

    interface SearchResults extends Vellum.TemplatingNodeSearchResultsResult {
        type: "SEARCH_RESULTS";
    }

    interface Error_ extends Vellum.TemplatingNodeErrorResult {
        type: "ERROR";
    }
}
