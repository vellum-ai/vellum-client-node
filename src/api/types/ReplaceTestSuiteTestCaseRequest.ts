/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * Information about the Test Case to replace
 */
export interface ReplaceTestSuiteTestCaseRequest {
    /** The Vellum-generated ID of the Test Case whose data you'd like to replace. Must specify either this or external_id. */
    id?: string | null;
    /** The ID that was originally provided upon Test Case creation that uniquely identifies the Test Case whose data you'd like to replace. Must specify either this of id. */
    externalId?: string | null;
    /** A human-readable label used to convey the intention of this Test Case */
    label?: string | null;
    /** Values for each of the Test Case's input variables */
    inputValues: Vellum.NamedTestCaseVariableValueRequest[];
    /** Values for each of the Test Case's evaluation variables */
    evaluationValues: Vellum.NamedTestCaseVariableValueRequest[];
}
