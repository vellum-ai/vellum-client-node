/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const InputVariableType: core.serialization.Schema<serializers.InputVariableType.Raw, Vellum.InputVariableType> =
    core.serialization.enum_(["STRING", "JSON", "CHAT_HISTORY"]);

export declare namespace InputVariableType {
    type Raw = "STRING" | "JSON" | "CHAT_HISTORY";
}
