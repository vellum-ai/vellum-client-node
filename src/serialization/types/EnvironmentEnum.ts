/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const EnvironmentEnum: core.serialization.Schema<serializers.EnvironmentEnum.Raw, Vellum.EnvironmentEnum> =
    core.serialization.enum_(["DEVELOPMENT", "STAGING", "PRODUCTION"]);

export declare namespace EnvironmentEnum {
    export type Raw = "DEVELOPMENT" | "STAGING" | "PRODUCTION";
}
