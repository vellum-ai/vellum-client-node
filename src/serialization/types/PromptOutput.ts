/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { StringVellumValue } from "./StringVellumValue";
import { JsonVellumValue } from "./JsonVellumValue";
import { ErrorVellumValue } from "./ErrorVellumValue";
import { FunctionCallVellumValue } from "./FunctionCallVellumValue";

export const PromptOutput: core.serialization.Schema<serializers.PromptOutput.Raw, Vellum.PromptOutput> =
    core.serialization
        .union("type", {
            STRING: StringVellumValue,
            JSON: JsonVellumValue,
            ERROR: ErrorVellumValue,
            FUNCTION_CALL: FunctionCallVellumValue,
        })
        .transform<Vellum.PromptOutput>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace PromptOutput {
    type Raw = PromptOutput.String | PromptOutput.Json | PromptOutput.Error | PromptOutput.FunctionCall;

    interface String extends StringVellumValue.Raw {
        type: "STRING";
    }

    interface Json extends JsonVellumValue.Raw {
        type: "JSON";
    }

    interface Error extends ErrorVellumValue.Raw {
        type: "ERROR";
    }

    interface FunctionCall extends FunctionCallVellumValue.Raw {
        type: "FUNCTION_CALL";
    }
}
