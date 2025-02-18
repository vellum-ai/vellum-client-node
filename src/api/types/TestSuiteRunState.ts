/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `QUEUED` - Queued
 * * `RUNNING` - Running
 * * `COMPLETE` - Complete
 * * `FAILED` - Failed
 * * `CANCELLED` - Cancelled
 */
export type TestSuiteRunState = "QUEUED" | "RUNNING" | "COMPLETE" | "FAILED" | "CANCELLED";
export const TestSuiteRunState = {
    Queued: "QUEUED",
    Running: "RUNNING",
    Complete: "COMPLETE",
    Failed: "FAILED",
    Cancelled: "CANCELLED",
} as const;
