/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const LogprobsEnum: core.serialization.Schema<serializers.LogprobsEnum.Raw, Vellum.LogprobsEnum> =
    core.serialization.enum_(["ALL", "NONE"]);

export declare namespace LogprobsEnum {
    export type Raw = "ALL" | "NONE";
}
