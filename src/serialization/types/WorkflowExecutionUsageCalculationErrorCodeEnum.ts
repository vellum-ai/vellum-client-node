/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const WorkflowExecutionUsageCalculationErrorCodeEnum: core.serialization.Schema<
    serializers.WorkflowExecutionUsageCalculationErrorCodeEnum.Raw,
    Vellum.WorkflowExecutionUsageCalculationErrorCodeEnum
> = core.serialization.enum_(["UNKNOWN", "DEPENDENCIES_FAILED", "NO_USAGE_CALCULATED", "INTERNAL_SERVER_ERROR"]);

export declare namespace WorkflowExecutionUsageCalculationErrorCodeEnum {
    export type Raw = "UNKNOWN" | "DEPENDENCIES_FAILED" | "NO_USAGE_CALCULATED" | "INTERNAL_SERVER_ERROR";
}
