/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const VellumVariableType: core.serialization.Schema<
    serializers.VellumVariableType.Raw,
    Vellum.VellumVariableType
> = core.serialization.enum_([
    "STRING",
    "NUMBER",
    "JSON",
    "CHAT_HISTORY",
    "SEARCH_RESULTS",
    "ERROR",
    "ARRAY",
    "FUNCTION_CALL",
    "IMAGE",
    "AUDIO",
    "DOCUMENT",
    "NULL",
    "THINKING",
]);

export declare namespace VellumVariableType {
    export type Raw =
        | "STRING"
        | "NUMBER"
        | "JSON"
        | "CHAT_HISTORY"
        | "SEARCH_RESULTS"
        | "ERROR"
        | "ARRAY"
        | "FUNCTION_CALL"
        | "IMAGE"
        | "AUDIO"
        | "DOCUMENT"
        | "NULL"
        | "THINKING";
}
