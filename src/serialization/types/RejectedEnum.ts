/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const RejectedEnum: core.serialization.Schema<serializers.RejectedEnum.Raw, Vellum.RejectedEnum> =
    core.serialization.stringLiteral("REJECTED");

export declare namespace RejectedEnum {
    type Raw = "REJECTED";
}
