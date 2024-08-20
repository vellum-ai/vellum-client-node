/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * An OpenAPI specification of a property with type 'integer'
 */
export interface OpenApiIntegerPropertyRequest {
    type: "integer";
    minimum?: number;
    maximum?: number;
    exclusiveMinimum?: boolean;
    exclusiveMaximum?: boolean;
    default?: number;
    title?: string;
    description?: string;
}