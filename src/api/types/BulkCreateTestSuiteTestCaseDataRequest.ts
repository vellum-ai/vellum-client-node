/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * Information about the Test Case to create
 */
export interface BulkCreateTestSuiteTestCaseDataRequest {
    label?: string;
    /** Values for each of the Test Case's input variables */
    inputValues: Vellum.NamedTestCaseVariableValueRequest[];
    /** Values for each of the Test Case's evaluation variables */
    evaluationValues: Vellum.NamedTestCaseVariableValueRequest[];
}
