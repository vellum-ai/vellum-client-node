/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const LogprobsEnum: core.serialization.Schema<serializers.LogprobsEnum.Raw, Vellum.LogprobsEnum> =
    core.serialization.enum_(["ALL", "NONE"]);

export declare namespace LogprobsEnum {
    type Raw = "ALL" | "NONE";
}
