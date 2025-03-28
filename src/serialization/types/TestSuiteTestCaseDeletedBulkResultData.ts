/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TestSuiteTestCaseDeletedBulkResultData: core.serialization.ObjectSchema<
    serializers.TestSuiteTestCaseDeletedBulkResultData.Raw,
    Vellum.TestSuiteTestCaseDeletedBulkResultData
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace TestSuiteTestCaseDeletedBulkResultData {
    export interface Raw {
        id: string;
    }
}
