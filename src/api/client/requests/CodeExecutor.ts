/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../index";

/**
 * @example
 *     {
 *         code: "x",
 *         runtime: "PYTHON_3_11_6",
 *         inputValues: [{
 *                 name: "x",
 *                 type: "STRING",
 *                 value: "value"
 *             }, {
 *                 name: "x",
 *                 type: "STRING",
 *                 value: "value"
 *             }],
 *         packages: [{
 *                 version: "version",
 *                 name: "name"
 *             }, {
 *                 version: "version",
 *                 name: "name"
 *             }],
 *         outputType: "STRING"
 *     }
 */
export interface CodeExecutor {
    code: string;
    runtime: Vellum.CodeExecutionRuntime;
    inputValues: Vellum.CodeExecutorInput[];
    packages: Vellum.CodeExecutionPackage[];
    outputType: Vellum.VellumVariableType;
}
