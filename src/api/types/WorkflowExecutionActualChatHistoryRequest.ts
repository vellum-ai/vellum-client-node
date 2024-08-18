/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface WorkflowExecutionActualChatHistoryRequest {
    /** The Vellum-generated ID of a workflow output. Must provide either this or output_key. output_key is typically preferred. */
    outputId?: string;
    /** The user-defined name of a workflow output. Must provide either this or output_id. Should correspond to the `Name` specified in a Final Output Node. Generally preferred over output_id. */
    outputKey?: string;
    /** Optionally provide a decimal number between 0.0 and 1.0 (inclusive) representing the quality of the output. 0 is the worst, 1 is the best. */
    quality?: number;
    /** Optionally provide additional metadata about the feedback submission. */
    metadata?: Record<string, unknown>;
    /** Optionally provide the timestamp representing when this feedback was collected. Used for reporting purposes. */
    timestamp?: number;
    outputType: "CHAT_HISTORY";
    /** Optionally provide the value that the output ideally should have been. */
    desiredOutputValue?: Vellum.ChatMessageRequest[];
}
