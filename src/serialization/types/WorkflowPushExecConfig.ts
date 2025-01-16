/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const WorkflowPushExecConfig: core.serialization.Schema<
    serializers.WorkflowPushExecConfig.Raw,
    Vellum.WorkflowPushExecConfig
> = core.serialization.string();

export declare namespace WorkflowPushExecConfig {
    export type Raw = string;
}
