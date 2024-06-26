/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const ReplacedEnum: core.serialization.Schema<serializers.ReplacedEnum.Raw, Vellum.ReplacedEnum> =
    core.serialization.stringLiteral("REPLACED");

export declare namespace ReplacedEnum {
    type Raw = "REPLACED";
}
