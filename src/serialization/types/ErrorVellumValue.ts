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
    type: core.serialization.stringLiteral("ERROR"),
    value: VellumError.optionalNullable(),
});

export declare namespace ErrorVellumValue {
    export interface Raw {
        type: "ERROR";
        value?: (VellumError.Raw | null) | null;
    }
}
