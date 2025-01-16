/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - `USER_DEFINED` - User Defined
 * - `HMAC` - Hmac
 * - `INTERNAL_API_KEY` - Internal Api Key
 */
export type SecretTypeEnum = "USER_DEFINED" | "HMAC" | "INTERNAL_API_KEY";
export const SecretTypeEnum = {
    UserDefined: "USER_DEFINED",
    Hmac: "HMAC",
    InternalApiKey: "INTERNAL_API_KEY",
} as const;
