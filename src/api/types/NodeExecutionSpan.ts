/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface NodeExecutionSpan {
    name: "node.execution";
    events: Vellum.VellumNodeExecutionEvent[];
    attributes: Vellum.NodeExecutionSpanAttributes;
    spanId: string;
    startTs: Date;
    endTs: Date;
    parentSpanId?: string;
}
