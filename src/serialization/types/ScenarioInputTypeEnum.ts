/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ScenarioInputTypeEnum: core.serialization.Schema<
    serializers.ScenarioInputTypeEnum.Raw,
    Vellum.ScenarioInputTypeEnum
> = core.serialization.enum_(["TEXT", "CHAT_HISTORY"]);

export declare namespace ScenarioInputTypeEnum {
    type Raw = "TEXT" | "CHAT_HISTORY";
}
