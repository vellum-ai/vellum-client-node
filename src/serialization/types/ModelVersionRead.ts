/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { ProviderEnum } from "./ProviderEnum";
import { ModelVersionBuildConfig } from "./ModelVersionBuildConfig";
import { ModelVersionExecConfig } from "./ModelVersionExecConfig";
import { ModelVersionReadStatusEnum } from "./ModelVersionReadStatusEnum";

export const ModelVersionRead: core.serialization.ObjectSchema<
    serializers.ModelVersionRead.Raw,
    Vellum.ModelVersionRead
> = core.serialization.object({
    id: core.serialization.string(),
    created: core.serialization.date(),
    label: core.serialization.string(),
    provider: ProviderEnum,
    externalId: core.serialization.property("external_id", core.serialization.string()),
    buildConfig: core.serialization.property("build_config", ModelVersionBuildConfig),
    execConfig: core.serialization.property("exec_config", ModelVersionExecConfig),
    status: ModelVersionReadStatusEnum.optional(),
});

export declare namespace ModelVersionRead {
    interface Raw {
        id: string;
        created: string;
        label: string;
        provider: ProviderEnum.Raw;
        external_id: string;
        build_config: ModelVersionBuildConfig.Raw;
        exec_config: ModelVersionExecConfig.Raw;
        status?: ModelVersionReadStatusEnum.Raw | null;
    }
}
