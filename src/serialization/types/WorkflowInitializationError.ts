/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const WorkflowInitializationError: core.serialization.ObjectSchema<
    serializers.WorkflowInitializationError.Raw,
    Vellum.WorkflowInitializationError
> = core.serialization.object({
    code: core.serialization.string(),
    message: core.serialization.string(),
});

export declare namespace WorkflowInitializationError {
    export interface Raw {
        code: string;
        message: string;
    }
}
