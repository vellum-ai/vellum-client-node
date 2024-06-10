/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

/**
 * A bulk operation that represents the replacing of a Test Case.
 */
export interface TestSuiteTestCaseReplaceBulkOperationRequest {
    /** An ID representing this specific operation. Can later be used to look up information about the operation's success in the response. */
    id: string;
    data: Vellum.BulkReplaceTestSuiteTestCaseDataRequest;
}