/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface WorkflowExecutionSpan {
    name: "workflow.execution";
    events: Vellum.VellumWorkflowExecutionEvent[];
    attributes: Vellum.WorkflowExecutionSpanAttributes;
    spanId: string;
    startTs: Date;
    endTs: Date;
    parentSpanId?: string;
}
