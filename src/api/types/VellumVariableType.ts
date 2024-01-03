/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - `STRING` - STRING
 * - `NUMBER` - NUMBER
 * - `JSON` - JSON
 * - `CHAT_HISTORY` - CHAT_HISTORY
 * - `SEARCH_RESULTS` - SEARCH_RESULTS
 * - `ERROR` - ERROR
 * - `ARRAY` - ARRAY
 * - `FUNCTION_CALL` - FUNCTION_CALL
 */
export type VellumVariableType =
    | "STRING"
    | "NUMBER"
    | "JSON"
    | "CHAT_HISTORY"
    | "SEARCH_RESULTS"
    | "ERROR"
    | "ARRAY"
    | "FUNCTION_CALL";

export const VellumVariableType = {
    String: "STRING",
    Number: "NUMBER",
    Json: "JSON",
    ChatHistory: "CHAT_HISTORY",
    SearchResults: "SEARCH_RESULTS",
    Error: "ERROR",
    Array: "ARRAY",
    FunctionCall: "FUNCTION_CALL",
} as const;
