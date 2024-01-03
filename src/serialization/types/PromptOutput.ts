/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const PromptOutput: core.serialization.Schema<serializers.PromptOutput.Raw, Vellum.PromptOutput> =
    core.serialization
        .union("type", {
            STRING: core.serialization.lazyObject(async () => (await import("..")).StringVariableValue),
            JSON: core.serialization.lazyObject(async () => (await import("..")).JsonVariableValue),
            ERROR: core.serialization.lazyObject(async () => (await import("..")).ErrorVariableValue),
            FUNCTION_CALL: core.serialization.lazyObject(async () => (await import("..")).FunctionCallVariableValue),
        })
        .transform<Vellum.PromptOutput>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace PromptOutput {
    type Raw = PromptOutput.String | PromptOutput.Json | PromptOutput.Error | PromptOutput.FunctionCall;

    interface String extends serializers.StringVariableValue.Raw {
        type: "STRING";
    }

    interface Json extends serializers.JsonVariableValue.Raw {
        type: "JSON";
    }

    interface Error extends serializers.ErrorVariableValue.Raw {
        type: "ERROR";
    }

    interface FunctionCall extends serializers.FunctionCallVariableValue.Raw {
        type: "FUNCTION_CALL";
    }
}
