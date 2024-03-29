/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const SubworkflowEnum: core.serialization.Schema<serializers.SubworkflowEnum.Raw, Vellum.SubworkflowEnum> =
    core.serialization.stringLiteral("SUBWORKFLOW");

export declare namespace SubworkflowEnum {
    type Raw = "SUBWORKFLOW";
}
