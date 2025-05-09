/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TemplatingNodeNumberResult: core.serialization.ObjectSchema<
    serializers.TemplatingNodeNumberResult.Raw,
    Vellum.TemplatingNodeNumberResult
> = core.serialization.object({
    id: core.serialization.string(),
    type: core.serialization.stringLiteral("NUMBER"),
    value: core.serialization.number().optionalNullable(),
});

export declare namespace TemplatingNodeNumberResult {
    export interface Raw {
        id: string;
        type: "NUMBER";
        value?: (number | null) | null;
    }
}
