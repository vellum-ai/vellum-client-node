/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const OpenApiNumberPropertyRequest: core.serialization.ObjectSchema<
    serializers.OpenApiNumberPropertyRequest.Raw,
    Vellum.OpenApiNumberPropertyRequest
> = core.serialization.object({
    type: core.serialization.stringLiteral("number"),
    minimum: core.serialization.number().optional(),
    maximum: core.serialization.number().optional(),
    format: core.serialization.string().optional(),
    exclusiveMinimum: core.serialization.property("exclusive_minimum", core.serialization.boolean().optional()),
    exclusiveMaximum: core.serialization.property("exclusive_maximum", core.serialization.boolean().optional()),
    default: core.serialization.number().optional(),
    title: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
});

export declare namespace OpenApiNumberPropertyRequest {
    interface Raw {
        type: "number";
        minimum?: number | null;
        maximum?: number | null;
        format?: string | null;
        exclusive_minimum?: boolean | null;
        exclusive_maximum?: boolean | null;
        default?: number | null;
        title?: string | null;
        description?: string | null;
    }
}