/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TestSuiteRunWorkflowSandboxHistoryItemExecConfigData: core.serialization.ObjectSchema<
    serializers.TestSuiteRunWorkflowSandboxHistoryItemExecConfigData.Raw,
    Vellum.TestSuiteRunWorkflowSandboxHistoryItemExecConfigData
> = core.serialization.object({
    historyItemId: core.serialization.property("history_item_id", core.serialization.string()),
    workflowVariantId: core.serialization.property("workflow_variant_id", core.serialization.string()),
});

export declare namespace TestSuiteRunWorkflowSandboxHistoryItemExecConfigData {
    export interface Raw {
        history_item_id: string;
        workflow_variant_id: string;
    }
}
