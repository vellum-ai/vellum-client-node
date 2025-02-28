/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `INVALID_REQUEST` - INVALID_REQUEST
 * * `INVALID_INPUTS` - INVALID_INPUTS
 * * `PROVIDER_ERROR` - PROVIDER_ERROR
 * * `REQUEST_TIMEOUT` - REQUEST_TIMEOUT
 * * `INTERNAL_SERVER_ERROR` - INTERNAL_SERVER_ERROR
 * * `USER_DEFINED_ERROR` - USER_DEFINED_ERROR
 */
export type VellumErrorCodeEnum =
    | "INVALID_REQUEST"
    | "INVALID_INPUTS"
    | "PROVIDER_ERROR"
    | "REQUEST_TIMEOUT"
    | "INTERNAL_SERVER_ERROR"
    | "USER_DEFINED_ERROR";
export const VellumErrorCodeEnum = {
    InvalidRequest: "INVALID_REQUEST",
    InvalidInputs: "INVALID_INPUTS",
    ProviderError: "PROVIDER_ERROR",
    RequestTimeout: "REQUEST_TIMEOUT",
    InternalServerError: "INTERNAL_SERVER_ERROR",
    UserDefinedError: "USER_DEFINED_ERROR",
} as const;
