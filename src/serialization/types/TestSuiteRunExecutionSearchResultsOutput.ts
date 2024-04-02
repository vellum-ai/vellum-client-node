/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TestSuiteRunExecutionSearchResultsOutput: core.serialization.ObjectSchema<
    serializers.TestSuiteRunExecutionSearchResultsOutput.Raw,
    Vellum.TestSuiteRunExecutionSearchResultsOutput
> = core.serialization.object({
    outputVariableId: core.serialization.property("output_variable_id", core.serialization.string()),
    value: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).SearchResult))
        .optional(),
});

export declare namespace TestSuiteRunExecutionSearchResultsOutput {
    interface Raw {
        output_variable_id: string;
        value?: serializers.SearchResult.Raw[] | null;
    }
}