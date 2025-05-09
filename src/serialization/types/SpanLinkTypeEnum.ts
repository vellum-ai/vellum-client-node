/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const SpanLinkTypeEnum: core.serialization.Schema<serializers.SpanLinkTypeEnum.Raw, Vellum.SpanLinkTypeEnum> =
    core.serialization.stringLiteral("TRIGGERED_BY");

export declare namespace SpanLinkTypeEnum {
    export type Raw = "TRIGGERED_BY";
}
