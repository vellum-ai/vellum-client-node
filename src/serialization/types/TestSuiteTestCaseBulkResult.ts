/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { TestSuiteTestCaseCreatedBulkResult } from "./TestSuiteTestCaseCreatedBulkResult";
import { TestSuiteTestCaseReplacedBulkResult } from "./TestSuiteTestCaseReplacedBulkResult";
import { TestSuiteTestCaseDeletedBulkResult } from "./TestSuiteTestCaseDeletedBulkResult";
import { TestSuiteTestCaseRejectedBulkResult } from "./TestSuiteTestCaseRejectedBulkResult";

export const TestSuiteTestCaseBulkResult: core.serialization.Schema<
    serializers.TestSuiteTestCaseBulkResult.Raw,
    Vellum.TestSuiteTestCaseBulkResult
> = core.serialization
    .union("type", {
        CREATED: TestSuiteTestCaseCreatedBulkResult,
        REPLACED: TestSuiteTestCaseReplacedBulkResult,
        DELETED: TestSuiteTestCaseDeletedBulkResult,
        REJECTED: TestSuiteTestCaseRejectedBulkResult,
    })
    .transform<Vellum.TestSuiteTestCaseBulkResult>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace TestSuiteTestCaseBulkResult {
    type Raw =
        | TestSuiteTestCaseBulkResult.Created
        | TestSuiteTestCaseBulkResult.Replaced
        | TestSuiteTestCaseBulkResult.Deleted
        | TestSuiteTestCaseBulkResult.Rejected;

    interface Created extends TestSuiteTestCaseCreatedBulkResult.Raw {
        type: "CREATED";
    }

    interface Replaced extends TestSuiteTestCaseReplacedBulkResult.Raw {
        type: "REPLACED";
    }

    interface Deleted extends TestSuiteTestCaseDeletedBulkResult.Raw {
        type: "DELETED";
    }

    interface Rejected extends TestSuiteTestCaseRejectedBulkResult.Raw {
        type: "REJECTED";
    }
}
