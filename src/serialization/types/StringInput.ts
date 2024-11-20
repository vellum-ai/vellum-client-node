/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const StringInput: core.serialization.ObjectSchema<serializers.StringInput.Raw, Vellum.StringInput> =
    core.serialization.object({
        name: core.serialization.string(),
        type: core.serialization.stringLiteral("STRING"),
        value: core.serialization.string(),
    });

export declare namespace StringInput {
    interface Raw {
        name: string;
        type: "STRING";
        value: string;
    }
}
