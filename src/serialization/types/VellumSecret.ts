/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const VellumSecret: core.serialization.ObjectSchema<serializers.VellumSecret.Raw, Vellum.VellumSecret> =
    core.serialization.object({
        name: core.serialization.string(),
    });

export declare namespace VellumSecret {
    export interface Raw {
        name: string;
    }
}
