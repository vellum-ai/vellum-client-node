/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const StreamingEnum: core.serialization.Schema<serializers.StreamingEnum.Raw, Vellum.StreamingEnum> =
    core.serialization.stringLiteral("STREAMING");

export declare namespace StreamingEnum {
    type Raw = "STREAMING";
}
