/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TemplatingNodeNumberResult: core.serialization.ObjectSchema<
    serializers.TemplatingNodeNumberResult.Raw,
    Vellum.TemplatingNodeNumberResult
> = core.serialization.object({
    id: core.serialization.string(),
    value: core.serialization.number().optional(),
});

export declare namespace TemplatingNodeNumberResult {
    interface Raw {
        id: string;
        value?: number | null;
    }
}