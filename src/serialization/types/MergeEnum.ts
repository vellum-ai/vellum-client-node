/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const MergeEnum: core.serialization.Schema<serializers.MergeEnum.Raw, Vellum.MergeEnum> =
    core.serialization.stringLiteral("MERGE");

export declare namespace MergeEnum {
    type Raw = "MERGE";
}
