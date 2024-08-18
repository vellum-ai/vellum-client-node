/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const OpenApiObjectProperty: core.serialization.ObjectSchema<
    serializers.OpenApiObjectProperty.Raw,
    Vellum.OpenApiObjectProperty
> = core.serialization.object({
    type: core.serialization.stringLiteral("object"),
    properties: core.serialization
        .record(core.serialization.string(), core.serialization.lazy(() => serializers.OpenApiProperty).optional())
        .optional(),
    required: core.serialization.list(core.serialization.string()).optional(),
    minProperties: core.serialization.property("min_properties", core.serialization.number().optional()),
    maxProperties: core.serialization.property("max_properties", core.serialization.number().optional()),
    propertyNames: core.serialization.property(
        "property_names",
        core.serialization.lazy(() => serializers.OpenApiProperty).optional()
    ),
    additionalProperties: core.serialization.property(
        "additional_properties",
        core.serialization.lazy(() => serializers.OpenApiProperty).optional()
    ),
    patternProperties: core.serialization.property(
        "pattern_properties",
        core.serialization
            .record(core.serialization.string(), core.serialization.lazy(() => serializers.OpenApiProperty).optional())
            .optional()
    ),
    default: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    title: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
});

export declare namespace OpenApiObjectProperty {
    interface Raw {
        type: "object";
        properties?: Record<string, serializers.OpenApiProperty.Raw | null | undefined> | null;
        required?: string[] | null;
        min_properties?: number | null;
        max_properties?: number | null;
        property_names?: serializers.OpenApiProperty.Raw | null;
        additional_properties?: serializers.OpenApiProperty.Raw | null;
        pattern_properties?: Record<string, serializers.OpenApiProperty.Raw | null | undefined> | null;
        default?: Record<string, unknown> | null;
        title?: string | null;
        description?: string | null;
    }
}
