/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const ImageEnum: core.serialization.Schema<serializers.ImageEnum.Raw, Vellum.ImageEnum> =
    core.serialization.stringLiteral("IMAGE");

export declare namespace ImageEnum {
    type Raw = "IMAGE";
}
