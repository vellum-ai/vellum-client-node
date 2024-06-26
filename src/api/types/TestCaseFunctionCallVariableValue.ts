/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A function call value for a variable in a Test Case.
 */
export interface TestCaseFunctionCallVariableValue {
    variableId: string;
    name: string;
    value?: Vellum.FunctionCall;
}
