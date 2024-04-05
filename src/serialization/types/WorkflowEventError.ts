/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { WorkflowExecutionEventErrorCode } from "./WorkflowExecutionEventErrorCode";

export const WorkflowEventError: core.serialization.ObjectSchema<
    serializers.WorkflowEventError.Raw,
    Vellum.WorkflowEventError
> = core.serialization.object({
    message: core.serialization.string(),
    code: WorkflowExecutionEventErrorCode,
});

export declare namespace WorkflowEventError {
    interface Raw {
        message: string;
        code: WorkflowExecutionEventErrorCode.Raw;
    }
}
