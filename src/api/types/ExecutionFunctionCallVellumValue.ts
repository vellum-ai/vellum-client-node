/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A value representing a Function Call.
 */
export interface ExecutionFunctionCallVellumValue {
    /** The variable's uniquely identifying internal id. */
    id: string;
    name: string;
    type: "FUNCTION_CALL";
    value?: Vellum.FunctionCall;
}
