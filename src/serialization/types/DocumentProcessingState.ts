/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const DocumentProcessingState: core.serialization.Schema<
    serializers.DocumentProcessingState.Raw,
    Vellum.DocumentProcessingState
> = core.serialization.enum_(["QUEUED", "PROCESSING", "PROCESSED", "FAILED", "UNKNOWN"]);

export declare namespace DocumentProcessingState {
    export type Raw = "QUEUED" | "PROCESSING" | "PROCESSED" | "FAILED" | "UNKNOWN";
}
