/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Vellum from "../../../../api/index";
import * as core from "../../../../core";

export const WorkflowDeploymentsListRequestStatus: core.serialization.Schema<
    serializers.WorkflowDeploymentsListRequestStatus.Raw,
    Vellum.WorkflowDeploymentsListRequestStatus
> = core.serialization.enum_(["ACTIVE", "ARCHIVED"]);

export declare namespace WorkflowDeploymentsListRequestStatus {
    export type Raw = "ACTIVE" | "ARCHIVED";
}
