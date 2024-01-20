/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Vellum from "../../../../api";
import * as core from "../../../../core";

export const DeploymentsListRequestStatus: core.serialization.Schema<
    serializers.DeploymentsListRequestStatus.Raw,
    Vellum.DeploymentsListRequestStatus
> = core.serialization.enum_(["ACTIVE", "ARCHIVED"]);

export declare namespace DeploymentsListRequestStatus {
    type Raw = "ACTIVE" | "ARCHIVED";
}
