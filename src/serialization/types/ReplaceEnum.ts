/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ReplaceEnum: core.serialization.Schema<serializers.ReplaceEnum.Raw, Vellum.ReplaceEnum> =
    core.serialization.stringLiteral("REPLACE");

export declare namespace ReplaceEnum {
    type Raw = "REPLACE";
}
