/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface WorkflowExecutionFulfilledEvent {
    parent?: Vellum.ParentContext;
    links?: Vellum.SpanLink[];
    name: "workflow.execution.fulfilled";
    body: Vellum.WorkflowExecutionFulfilledBody;
    id: string;
    timestamp: Date;
    apiVersion?: Vellum.ApiVersionEnum;
    traceId: string;
    spanId: string;
}
