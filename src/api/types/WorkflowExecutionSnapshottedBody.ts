/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface WorkflowExecutionSnapshottedBody {
    workflowDefinition: Vellum.VellumCodeResourceDefinition;
    state: Record<string, unknown>;
}
