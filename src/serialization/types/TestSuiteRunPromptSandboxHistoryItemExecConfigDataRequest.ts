/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TestSuiteRunPromptSandboxHistoryItemExecConfigDataRequest: core.serialization.ObjectSchema<
    serializers.TestSuiteRunPromptSandboxHistoryItemExecConfigDataRequest.Raw,
    Vellum.TestSuiteRunPromptSandboxHistoryItemExecConfigDataRequest
> = core.serialization.object({
    historyItemId: core.serialization.property("history_item_id", core.serialization.string()),
    promptVariantId: core.serialization.property("prompt_variant_id", core.serialization.string()),
});

export declare namespace TestSuiteRunPromptSandboxHistoryItemExecConfigDataRequest {
    export interface Raw {
        history_item_id: string;
        prompt_variant_id: string;
    }
}
