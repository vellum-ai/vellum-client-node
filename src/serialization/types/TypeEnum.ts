/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TypeEnum: core.serialization.Schema<serializers.TypeEnum.Raw, Vellum.TypeEnum> = core.serialization.enum_([
    "TEXT",
    "CHAT_HISTORY",
]);

export declare namespace TypeEnum {
    type Raw = "TEXT" | "CHAT_HISTORY";
}