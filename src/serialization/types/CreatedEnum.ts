/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const CreatedEnum: core.serialization.Schema<serializers.CreatedEnum.Raw, Vellum.CreatedEnum> =
    core.serialization.stringLiteral("CREATED");

export declare namespace CreatedEnum {
    type Raw = "CREATED";
}
