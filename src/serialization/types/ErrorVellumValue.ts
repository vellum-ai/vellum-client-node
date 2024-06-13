/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumError } from "./VellumError";

export const ErrorVellumValue: core.serialization.ObjectSchema<
    serializers.ErrorVellumValue.Raw,
    Vellum.ErrorVellumValue
> = core.serialization.object({
    value: VellumError.optional(),
});

export declare namespace ErrorVellumValue {
    interface Raw {
        value?: VellumError.Raw | null;
    }
}
