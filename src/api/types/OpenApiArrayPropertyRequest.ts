/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * An OpenAPI specification of a parameter with type 'array'
 */
export interface OpenApiArrayPropertyRequest {
    minItems?: number;
    maxItems?: number;
    uniqueItems?: boolean;
    items: Vellum.OpenApiPropertyRequest;
    prefixItems?: Vellum.OpenApiPropertyRequest[];
    contains?: Vellum.OpenApiPropertyRequest;
    minContains?: number;
    maxContains?: number;
    default?: unknown[];
    title?: string;
    description?: string;
}
