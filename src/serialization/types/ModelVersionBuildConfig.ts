/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { ModelVersionSandboxSnapshot } from "./ModelVersionSandboxSnapshot";

export const ModelVersionBuildConfig: core.serialization.ObjectSchema<
    serializers.ModelVersionBuildConfig.Raw,
    Vellum.ModelVersionBuildConfig
> = core.serialization.object({
    baseModel: core.serialization.property("base_model", core.serialization.string()),
    sandboxSnapshot: core.serialization.property("sandbox_snapshot", ModelVersionSandboxSnapshot.optional()),
    promptVersionId: core.serialization.property("prompt_version_id", core.serialization.string().optional()),
});

export declare namespace ModelVersionBuildConfig {
    interface Raw {
        base_model: string;
        sandbox_snapshot?: ModelVersionSandboxSnapshot.Raw | null;
        prompt_version_id?: string | null;
    }
}
