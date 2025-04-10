/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface WorkflowSandboxParentContext {
    parent?: Vellum.ParentContext;
    links?: Vellum.SpanLink[];
    type: "WORKFLOW_SANDBOX";
    spanId: string;
    sandboxId: string;
    sandboxHistoryItemId: string;
    scenarioId: string;
}
