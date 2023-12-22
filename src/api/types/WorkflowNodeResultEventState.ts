/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - `INITIATED` - INITIATED
 * - `STREAMING` - STREAMING
 * - `FULFILLED` - FULFILLED
 * - `REJECTED` - REJECTED
 */
export type WorkflowNodeResultEventState = "INITIATED" | "STREAMING" | "FULFILLED" | "REJECTED";

export const WorkflowNodeResultEventState = {
    Initiated: "INITIATED",
    Streaming: "STREAMING",
    Fulfilled: "FULFILLED",
    Rejected: "REJECTED",
} as const;
