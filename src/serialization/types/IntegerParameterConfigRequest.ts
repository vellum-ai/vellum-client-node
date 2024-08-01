/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const IntegerParameterConfigRequest: core.serialization.ObjectSchema<
    serializers.IntegerParameterConfigRequest.Raw,
    Vellum.IntegerParameterConfigRequest
> = core.serialization.object({
    minimum: core.serialization.number().optional(),
    maximum: core.serialization.number().optional(),
    exclusiveMinimum: core.serialization.property("exclusive_minimum", core.serialization.boolean().optional()),
    exclusiveMaximum: core.serialization.property("exclusive_maximum", core.serialization.boolean().optional()),
    default: core.serialization.number().optional(),
    title: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
});

export declare namespace IntegerParameterConfigRequest {
    interface Raw {
        minimum?: number | null;
        maximum?: number | null;
        exclusive_minimum?: boolean | null;
        exclusive_maximum?: boolean | null;
        default?: number | null;
        title?: string | null;
        description?: string | null;
    }
}
