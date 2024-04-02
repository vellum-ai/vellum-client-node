/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TestSuiteRunTestSuite: core.serialization.ObjectSchema<
    serializers.TestSuiteRunTestSuite.Raw,
    Vellum.TestSuiteRunTestSuite
> = core.serialization.object({
    id: core.serialization.string(),
    historyItemId: core.serialization.property("history_item_id", core.serialization.string()),
    label: core.serialization.string(),
});

export declare namespace TestSuiteRunTestSuite {
    interface Raw {
        id: string;
        history_item_id: string;
        label: string;
    }
}
