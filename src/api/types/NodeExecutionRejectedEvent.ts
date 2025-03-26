/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface NodeExecutionRejectedEvent {
    parent?: Vellum.ParentContext;
    links?: Vellum.SpanLink[];
    name: "node.execution.rejected";
    body: Vellum.NodeExecutionRejectedBody;
    id: string;
    timestamp: Date;
    apiVersion?: Vellum.ApiVersionEnum;
    traceId: string;
    spanId: string;
}
