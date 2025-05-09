/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const WorkflowPushDeploymentConfigRequest: core.serialization.ObjectSchema<
    serializers.WorkflowPushDeploymentConfigRequest.Raw,
    Vellum.WorkflowPushDeploymentConfigRequest
> = core.serialization.object({
    label: core.serialization.string().optionalNullable(),
    name: core.serialization.string().optionalNullable(),
    description: core.serialization.string().optionalNullable(),
    releaseTags: core.serialization.property(
        "release_tags",
        core.serialization.list(core.serialization.string()).optionalNullable(),
    ),
});

export declare namespace WorkflowPushDeploymentConfigRequest {
    export interface Raw {
        label?: (string | null) | null;
        name?: (string | null) | null;
        description?: (string | null) | null;
        release_tags?: (string[] | null) | null;
    }
}
