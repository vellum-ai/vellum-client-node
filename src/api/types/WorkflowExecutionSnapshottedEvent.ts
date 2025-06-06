/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface WorkflowExecutionSnapshottedEvent {
    parent?: Vellum.ParentContext | null;
    links?: Vellum.SpanLink[] | null;
    name: "workflow.execution.snapshotted";
    body: Vellum.WorkflowExecutionSnapshottedBody;
    id: string;
    timestamp: Date;
    apiVersion?: Vellum.ApiVersionEnum;
    traceId: string;
    spanId: string;
}
