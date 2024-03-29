/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TemplatingNodeStringResult: core.serialization.ObjectSchema<
    serializers.TemplatingNodeStringResult.Raw,
    Vellum.TemplatingNodeStringResult
> = core.serialization.object({
    id: core.serialization.string(),
    value: core.serialization.string().optional(),
});

export declare namespace TemplatingNodeStringResult {
    interface Raw {
        id: string;
        value?: string | null;
    }
}
