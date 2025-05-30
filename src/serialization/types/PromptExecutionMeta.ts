/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FinishReasonEnum } from "./FinishReasonEnum";
import { MlModelUsage } from "./MlModelUsage";
import { Price } from "./Price";

export const PromptExecutionMeta: core.serialization.ObjectSchema<
    serializers.PromptExecutionMeta.Raw,
    Vellum.PromptExecutionMeta
> = core.serialization.object({
    modelName: core.serialization.property("model_name", core.serialization.string().optionalNullable()),
    latency: core.serialization.number().optionalNullable(),
    deploymentReleaseTag: core.serialization.property(
        "deployment_release_tag",
        core.serialization.string().optionalNullable(),
    ),
    promptVersionId: core.serialization.property("prompt_version_id", core.serialization.string().optionalNullable()),
    finishReason: core.serialization.property("finish_reason", FinishReasonEnum.optionalNullable()),
    usage: MlModelUsage.optionalNullable(),
    cost: Price.optionalNullable(),
});

export declare namespace PromptExecutionMeta {
    export interface Raw {
        model_name?: (string | null) | null;
        latency?: (number | null) | null;
        deployment_release_tag?: (string | null) | null;
        prompt_version_id?: (string | null) | null;
        finish_reason?: (FinishReasonEnum.Raw | null) | null;
        usage?: (MlModelUsage.Raw | null) | null;
        cost?: (Price.Raw | null) | null;
    }
}
