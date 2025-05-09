/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * Execution output of an entity evaluated during a Test Suite Run that is of type FUNCTION_CALL
 */
export interface TestSuiteRunExecutionFunctionCallOutput {
    name: string;
    type: "FUNCTION_CALL";
    value?: Vellum.FunctionCall | null;
    outputVariableId: string;
}
