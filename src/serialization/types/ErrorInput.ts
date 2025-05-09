/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumError } from "./VellumError";

export const ErrorInput: core.serialization.ObjectSchema<serializers.ErrorInput.Raw, Vellum.ErrorInput> =
    core.serialization.object({
        name: core.serialization.string(),
        type: core.serialization.stringLiteral("ERROR"),
        value: VellumError,
    });

export declare namespace ErrorInput {
    export interface Raw {
        name: string;
        type: "ERROR";
        value: VellumError.Raw;
    }
}
