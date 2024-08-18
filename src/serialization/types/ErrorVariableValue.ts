/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumError } from "./VellumError";

export const ErrorVariableValue: core.serialization.ObjectSchema<
    serializers.ErrorVariableValue.Raw,
    Vellum.ErrorVariableValue
> = core.serialization.object({
    type: core.serialization.stringLiteral("ERROR"),
    value: VellumError.optional(),
});

export declare namespace ErrorVariableValue {
    interface Raw {
        type: "ERROR";
        value?: VellumError.Raw | null;
    }
}
