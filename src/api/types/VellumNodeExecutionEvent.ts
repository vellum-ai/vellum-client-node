/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type VellumNodeExecutionEvent =
    | Vellum.NodeExecutionInitiatedEvent
    | Vellum.NodeExecutionStreamingEvent
    | Vellum.NodeExecutionFulfilledEvent
    | Vellum.NodeExecutionRejectedEvent
    | Vellum.NodeExecutionPausedEvent
    | Vellum.NodeExecutionResumedEvent;
