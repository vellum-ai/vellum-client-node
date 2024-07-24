/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { UpsertTestSuiteTestCaseRequest } from "./UpsertTestSuiteTestCaseRequest";

export const TestSuiteTestCaseUpsertBulkOperationRequest: core.serialization.ObjectSchema<
    serializers.TestSuiteTestCaseUpsertBulkOperationRequest.Raw,
    Vellum.TestSuiteTestCaseUpsertBulkOperationRequest
> = core.serialization.object({
    id: core.serialization.string(),
    data: UpsertTestSuiteTestCaseRequest,
});

export declare namespace TestSuiteTestCaseUpsertBulkOperationRequest {
    interface Raw {
        id: string;
        data: UpsertTestSuiteTestCaseRequest.Raw;
    }
}