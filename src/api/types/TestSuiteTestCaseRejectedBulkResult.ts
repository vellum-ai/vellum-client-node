/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The result of a bulk operation that failed to operate on a Test Case.
 */
export interface TestSuiteTestCaseRejectedBulkResult {
    /** An ID that maps back to one of the initially supplied operations. Can be used to determine the result of a given operation. */
    id?: string | null;
    type: "REJECTED";
    /** Details about the error that occurred */
    data: Record<string, unknown>;
}
