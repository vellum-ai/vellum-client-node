/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowExecutionUsageCalculationErrorCodeEnum } from "./WorkflowExecutionUsageCalculationErrorCodeEnum";

export const WorkflowExecutionUsageCalculationError: core.serialization.ObjectSchema<
    serializers.WorkflowExecutionUsageCalculationError.Raw,
    Vellum.WorkflowExecutionUsageCalculationError
> = core.serialization.object({
    code: WorkflowExecutionUsageCalculationErrorCodeEnum,
    message: core.serialization.string(),
});

export declare namespace WorkflowExecutionUsageCalculationError {
    export interface Raw {
        code: WorkflowExecutionUsageCalculationErrorCodeEnum.Raw;
        message: string;
    }
}
