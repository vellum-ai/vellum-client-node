/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A bulk operation that represents the upserting of a Test Case.
 */
export interface TestSuiteTestCaseUpsertBulkOperationRequest {
    /** An ID representing this specific operation. Can later be used to look up information about the operation's success in the response. */
    id: string;
    type: "UPSERT";
    data: Vellum.UpsertTestSuiteTestCaseRequest;
}
