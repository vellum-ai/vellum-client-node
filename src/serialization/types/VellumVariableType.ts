/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const VellumVariableType: core.serialization.Schema<
    serializers.VellumVariableType.Raw,
    Vellum.VellumVariableType
> = core.serialization.enum_(["STRING", "JSON", "CHAT_HISTORY", "SEARCH_RESULTS"]);

export declare namespace VellumVariableType {
    type Raw = "STRING" | "JSON" | "CHAT_HISTORY" | "SEARCH_RESULTS";
}