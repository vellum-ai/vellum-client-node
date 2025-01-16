/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const NumberInput: core.serialization.ObjectSchema<serializers.NumberInput.Raw, Vellum.NumberInput> =
    core.serialization.object({
        name: core.serialization.string(),
        type: core.serialization.stringLiteral("NUMBER"),
        value: core.serialization.number(),
    });

export declare namespace NumberInput {
    export interface Raw {
        name: string;
        type: "NUMBER";
        value: number;
    }
}
