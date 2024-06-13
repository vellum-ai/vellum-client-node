/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TemplatingNodeJsonResult: core.serialization.ObjectSchema<
    serializers.TemplatingNodeJsonResult.Raw,
    Vellum.TemplatingNodeJsonResult
> = core.serialization.object({
    id: core.serialization.string(),
    value: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace TemplatingNodeJsonResult {
    interface Raw {
        id: string;
        value?: Record<string, unknown> | null;
    }
}
