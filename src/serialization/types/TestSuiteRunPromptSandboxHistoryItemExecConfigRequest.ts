/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { TestSuiteRunPromptSandboxHistoryItemExecConfigDataRequest } from "./TestSuiteRunPromptSandboxHistoryItemExecConfigDataRequest";

export const TestSuiteRunPromptSandboxHistoryItemExecConfigRequest: core.serialization.ObjectSchema<
    serializers.TestSuiteRunPromptSandboxHistoryItemExecConfigRequest.Raw,
    Vellum.TestSuiteRunPromptSandboxHistoryItemExecConfigRequest
> = core.serialization.object({
    type: core.serialization.stringLiteral("PROMPT_SANDBOX_HISTORY_ITEM"),
    data: TestSuiteRunPromptSandboxHistoryItemExecConfigDataRequest,
    testCaseIds: core.serialization.property(
        "test_case_ids",
        core.serialization.list(core.serialization.string()).optionalNullable(),
    ),
});

export declare namespace TestSuiteRunPromptSandboxHistoryItemExecConfigRequest {
    export interface Raw {
        type: "PROMPT_SANDBOX_HISTORY_ITEM";
        data: TestSuiteRunPromptSandboxHistoryItemExecConfigDataRequest.Raw;
        test_case_ids?: (string[] | null) | null;
    }
}
