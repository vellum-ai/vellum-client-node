/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { TestSuiteTestCaseDeleteBulkOperationDataRequest } from "./TestSuiteTestCaseDeleteBulkOperationDataRequest";

export const TestSuiteTestCaseDeleteBulkOperationRequest: core.serialization.ObjectSchema<
    serializers.TestSuiteTestCaseDeleteBulkOperationRequest.Raw,
    Vellum.TestSuiteTestCaseDeleteBulkOperationRequest
> = core.serialization.object({
    id: core.serialization.string(),
    type: core.serialization.stringLiteral("DELETE"),
    data: TestSuiteTestCaseDeleteBulkOperationDataRequest,
});

export declare namespace TestSuiteTestCaseDeleteBulkOperationRequest {
    interface Raw {
        id: string;
        type: "DELETE";
        data: TestSuiteTestCaseDeleteBulkOperationDataRequest.Raw;
    }
}
