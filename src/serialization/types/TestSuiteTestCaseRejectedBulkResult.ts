/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TestSuiteTestCaseRejectedBulkResult: core.serialization.ObjectSchema<
    serializers.TestSuiteTestCaseRejectedBulkResult.Raw,
    Vellum.TestSuiteTestCaseRejectedBulkResult
> = core.serialization.object({
    id: core.serialization.string().optional(),
    type: core.serialization.stringLiteral("REJECTED"),
    data: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
});

export declare namespace TestSuiteTestCaseRejectedBulkResult {
    export interface Raw {
        id?: string | null;
        type: "REJECTED";
        data: Record<string, unknown>;
    }
}
