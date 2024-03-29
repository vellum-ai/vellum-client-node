/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const VellumError: core.serialization.ObjectSchema<serializers.VellumError.Raw, Vellum.VellumError> =
    core.serialization.object({
        message: core.serialization.string(),
        code: core.serialization.lazy(async () => (await import("..")).VellumErrorCodeEnum),
    });

export declare namespace VellumError {
    interface Raw {
        message: string;
        code: serializers.VellumErrorCodeEnum.Raw;
    }
}
