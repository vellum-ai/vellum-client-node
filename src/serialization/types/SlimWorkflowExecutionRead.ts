/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ExecutionVellumValue } from "./ExecutionVellumValue";
import { WorkflowError } from "./WorkflowError";
import { WorkflowExecutionActual } from "./WorkflowExecutionActual";
import { WorkflowExecutionViewOnlineEvalMetricResult } from "./WorkflowExecutionViewOnlineEvalMetricResult";
import { WorkflowExecutionUsageCalculationFulfilledBody } from "./WorkflowExecutionUsageCalculationFulfilledBody";

export const SlimWorkflowExecutionRead: core.serialization.ObjectSchema<
    serializers.SlimWorkflowExecutionRead.Raw,
    Vellum.SlimWorkflowExecutionRead
> = core.serialization.object({
    spanId: core.serialization.property("span_id", core.serialization.string()),
    parentContext: core.serialization.property(
        "parent_context",
        core.serialization.lazyObject(() => serializers.WorkflowDeploymentParentContext).optional(),
    ),
    start: core.serialization.date(),
    end: core.serialization.date().optional(),
    inputs: core.serialization.list(ExecutionVellumValue),
    outputs: core.serialization.list(ExecutionVellumValue),
    error: WorkflowError.optional(),
    latestActual: core.serialization.property("latest_actual", WorkflowExecutionActual.optional()),
    metricResults: core.serialization.property(
        "metric_results",
        core.serialization.list(WorkflowExecutionViewOnlineEvalMetricResult),
    ),
    usageResults: core.serialization.property(
        "usage_results",
        core.serialization.list(WorkflowExecutionUsageCalculationFulfilledBody),
    ),
});

export declare namespace SlimWorkflowExecutionRead {
    export interface Raw {
        span_id: string;
        parent_context?: serializers.WorkflowDeploymentParentContext.Raw | null;
        start: string;
        end?: string | null;
        inputs: ExecutionVellumValue.Raw[];
        outputs: ExecutionVellumValue.Raw[];
        error?: WorkflowError.Raw | null;
        latest_actual?: WorkflowExecutionActual.Raw | null;
        metric_results: WorkflowExecutionViewOnlineEvalMetricResult.Raw[];
        usage_results: WorkflowExecutionUsageCalculationFulfilledBody.Raw[];
    }
}
