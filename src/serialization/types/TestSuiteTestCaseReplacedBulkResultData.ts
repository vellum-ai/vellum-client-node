/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TestSuiteTestCaseReplacedBulkResultData: core.serialization.ObjectSchema<
    serializers.TestSuiteTestCaseReplacedBulkResultData.Raw,
    Vellum.TestSuiteTestCaseReplacedBulkResultData
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace TestSuiteTestCaseReplacedBulkResultData {
    interface Raw {
        id: string;
    }
}
