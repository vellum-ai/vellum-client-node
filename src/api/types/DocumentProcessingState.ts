/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - `QUEUED` - Queued
 * - `PROCESSING` - Processing
 * - `PROCESSED` - Processed
 * - `FAILED` - Failed
 * - `UNKNOWN` - Unknown
 */
export type DocumentProcessingState = "QUEUED" | "PROCESSING" | "PROCESSED" | "FAILED" | "UNKNOWN";
export const DocumentProcessingState = {
    Queued: "QUEUED",
    Processing: "PROCESSING",
    Processed: "PROCESSED",
    Failed: "FAILED",
    Unknown: "UNKNOWN",
} as const;
