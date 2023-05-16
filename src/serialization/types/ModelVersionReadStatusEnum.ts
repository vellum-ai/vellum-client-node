/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ModelVersionReadStatusEnum: core.serialization.Schema<
    serializers.ModelVersionReadStatusEnum.Raw,
    Vellum.ModelVersionReadStatusEnum
> = core.serialization.enum_(["CREATING", "READY", "CREATION_FAILED", "DISABLED"]);

export declare namespace ModelVersionReadStatusEnum {
    type Raw = "CREATING" | "READY" | "CREATION_FAILED" | "DISABLED";
}