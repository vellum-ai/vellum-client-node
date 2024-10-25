/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const SecretTypeEnum: core.serialization.Schema<serializers.SecretTypeEnum.Raw, Vellum.SecretTypeEnum> =
    core.serialization.enum_(["USER_DEFINED", "HMAC", "INTERNAL_API_KEY"]);

export declare namespace SecretTypeEnum {
    type Raw = "USER_DEFINED" | "HMAC" | "INTERNAL_API_KEY";
}
