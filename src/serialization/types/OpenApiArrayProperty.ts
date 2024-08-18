/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const OpenApiArrayProperty: core.serialization.ObjectSchema<
    serializers.OpenApiArrayProperty.Raw,
    Vellum.OpenApiArrayProperty
> = core.serialization.object({
    type: core.serialization.stringLiteral("array"),
    minItems: core.serialization.property("min_items", core.serialization.number().optional()),
    maxItems: core.serialization.property("max_items", core.serialization.number().optional()),
    uniqueItems: core.serialization.property("unique_items", core.serialization.boolean().optional()),
    items: core.serialization.lazy(() => serializers.OpenApiProperty),
    prefixItems: core.serialization.property(
        "prefix_items",
        core.serialization.list(core.serialization.lazy(() => serializers.OpenApiProperty)).optional()
    ),
    contains: core.serialization.lazy(() => serializers.OpenApiProperty).optional(),
    minContains: core.serialization.property("min_contains", core.serialization.number().optional()),
    maxContains: core.serialization.property("max_contains", core.serialization.number().optional()),
    default: core.serialization.list(core.serialization.unknown()).optional(),
    title: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
});

export declare namespace OpenApiArrayProperty {
    interface Raw {
        type: "array";
        min_items?: number | null;
        max_items?: number | null;
        unique_items?: boolean | null;
        items: serializers.OpenApiProperty.Raw;
        prefix_items?: serializers.OpenApiProperty.Raw[] | null;
        contains?: serializers.OpenApiProperty.Raw | null;
        min_contains?: number | null;
        max_contains?: number | null;
        default?: unknown[] | null;
        title?: string | null;
        description?: string | null;
    }
}
