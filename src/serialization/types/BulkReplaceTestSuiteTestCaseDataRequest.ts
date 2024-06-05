/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { NamedTestCaseVariableValueRequest } from "./NamedTestCaseVariableValueRequest";

export const BulkReplaceTestSuiteTestCaseDataRequest: core.serialization.ObjectSchema<
    serializers.BulkReplaceTestSuiteTestCaseDataRequest.Raw,
    Vellum.BulkReplaceTestSuiteTestCaseDataRequest
> = core.serialization.object({
    id: core.serialization.string(),
    label: core.serialization.string().optional(),
    inputValues: core.serialization.property(
        "input_values",
        core.serialization.list(NamedTestCaseVariableValueRequest)
    ),
    evaluationValues: core.serialization.property(
        "evaluation_values",
        core.serialization.list(NamedTestCaseVariableValueRequest)
    ),
});

export declare namespace BulkReplaceTestSuiteTestCaseDataRequest {
    interface Raw {
        id: string;
        label?: string | null;
        input_values: NamedTestCaseVariableValueRequest.Raw[];
        evaluation_values: NamedTestCaseVariableValueRequest.Raw[];
    }
}
