/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const ParentContext: core.serialization.Schema<serializers.ParentContext.Raw, Vellum.ParentContext> =
    core.serialization.undiscriminatedUnion([
        core.serialization.lazyObject(() => serializers.WorkflowParentContext),
        core.serialization.lazyObject(() => serializers.NodeParentContext),
        core.serialization.lazyObject(() => serializers.WorkflowDeploymentParentContext),
        core.serialization.lazyObject(() => serializers.WorkflowSandboxParentContext),
        core.serialization.lazyObject(() => serializers.PromptDeploymentParentContext),
        core.serialization.lazyObject(() => serializers.ApiRequestParentContext),
    ]);

export declare namespace ParentContext {
    export type Raw =
        | serializers.WorkflowParentContext.Raw
        | serializers.NodeParentContext.Raw
        | serializers.WorkflowDeploymentParentContext.Raw
        | serializers.WorkflowSandboxParentContext.Raw
        | serializers.PromptDeploymentParentContext.Raw
        | serializers.ApiRequestParentContext.Raw;
}
