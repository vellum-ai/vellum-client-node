/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface ExecuteWorkflowResponse {
    executionId: string;
    runId?: string;
    externalId?: string;
    data: Vellum.ExecuteWorkflowWorkflowResultEvent;
}
