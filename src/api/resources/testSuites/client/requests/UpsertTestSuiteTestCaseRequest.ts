/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../../index";

/**
 * @example
 *     {
 *         inputValues: [],
 *         evaluationValues: []
 *     }
 */
export interface UpsertTestSuiteTestCaseRequest {
    /** The Vellum-generated ID of an existing Test Case whose data you'd like to replace. If specified and no Test Case exists with this ID, a 404 will be returned. */
    upsertTestSuiteTestCaseRequestId?: string;
    /** An ID external to Vellum that uniquely identifies the Test Case that you'd like to create/update. If there's a match on a Test Case that was previously created with the same external_id, it will be updated. Otherwise, a new Test Case will be created with this value as its external_id. If no external_id is specified, then a new Test Case will always be created. */
    externalId?: string;
    /** A human-readable label used to convey the intention of this Test Case */
    label?: string;
    /** Values for each of the Test Case's input variables */
    inputValues: Vellum.NamedTestCaseVariableValueRequest[];
    /** Values for each of the Test Case's evaluation variables */
    evaluationValues: Vellum.NamedTestCaseVariableValueRequest[];
}
