/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const DeploymentReleaseTagDeploymentHistoryItem: core.serialization.ObjectSchema<
    serializers.DeploymentReleaseTagDeploymentHistoryItem.Raw,
    Vellum.DeploymentReleaseTagDeploymentHistoryItem
> = core.serialization.object({
    id: core.serialization.string(),
    timestamp: core.serialization.date(),
});

export declare namespace DeploymentReleaseTagDeploymentHistoryItem {
    interface Raw {
        id: string;
        timestamp: string;
    }
}
