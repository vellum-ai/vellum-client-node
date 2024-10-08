/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface FunctionDefinitionPromptBlockPropertiesRequest {
    /** The name identifying the function. */
    functionName?: string;
    /** A description to help guide the model when to invoke this function. */
    functionDescription?: string;
    /** An OpenAPI specification of parameters that are supported by this function. */
    functionParameters?: Record<string, unknown>;
    /** Set this option to true to force the model to return a function call of this function. */
    functionForced?: boolean;
    /** Set this option to use strict schema decoding when available. */
    functionStrict?: boolean;
}
