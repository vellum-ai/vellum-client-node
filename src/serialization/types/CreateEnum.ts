/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const CreateEnum: core.serialization.Schema<serializers.CreateEnum.Raw, Vellum.CreateEnum> =
    core.serialization.stringLiteral("CREATE");

export declare namespace CreateEnum {
    type Raw = "CREATE";
}
