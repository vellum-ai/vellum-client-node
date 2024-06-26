/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const StringEnum: core.serialization.Schema<serializers.StringEnum.Raw, Vellum.StringEnum> =
    core.serialization.stringLiteral("STRING");

export declare namespace StringEnum {
    type Raw = "STRING";
}
