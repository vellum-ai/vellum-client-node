/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const PromptBlockState: core.serialization.Schema<serializers.PromptBlockState.Raw, Vellum.PromptBlockState> =
    core.serialization.enum_(["ENABLED", "DISABLED"]);

export declare namespace PromptBlockState {
    export type Raw = "ENABLED" | "DISABLED";
}
