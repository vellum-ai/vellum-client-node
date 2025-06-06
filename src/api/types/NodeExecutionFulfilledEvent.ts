/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface NodeExecutionFulfilledEvent {
    parent?: Vellum.ParentContext | null;
    links?: Vellum.SpanLink[] | null;
    name: "node.execution.fulfilled";
    body: Vellum.NodeExecutionFulfilledBody;
    id: string;
    timestamp: Date;
    apiVersion?: Vellum.ApiVersionEnum;
    traceId: string;
    spanId: string;
}
