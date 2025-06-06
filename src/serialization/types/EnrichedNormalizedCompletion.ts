/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FinishReasonEnum } from "./FinishReasonEnum";
import { NormalizedLogProbs } from "./NormalizedLogProbs";
import { VellumVariableType } from "./VellumVariableType";

export const EnrichedNormalizedCompletion: core.serialization.ObjectSchema<
    serializers.EnrichedNormalizedCompletion.Raw,
    Vellum.EnrichedNormalizedCompletion
> = core.serialization.object({
    id: core.serialization.string(),
    externalId: core.serialization.property("external_id", core.serialization.string().optionalNullable()),
    text: core.serialization.string(),
    finishReason: core.serialization.property("finish_reason", FinishReasonEnum.optionalNullable()),
    logprobs: NormalizedLogProbs.optionalNullable(),
    modelVersionId: core.serialization.property("model_version_id", core.serialization.string().optionalNullable()),
    promptVersionId: core.serialization.property("prompt_version_id", core.serialization.string()),
    type: VellumVariableType.optional(),
    deploymentReleaseTag: core.serialization.property("deployment_release_tag", core.serialization.string()),
    modelName: core.serialization.property("model_name", core.serialization.string()),
});

export declare namespace EnrichedNormalizedCompletion {
    export interface Raw {
        id: string;
        external_id?: (string | null) | null;
        text: string;
        finish_reason?: (FinishReasonEnum.Raw | null) | null;
        logprobs?: (NormalizedLogProbs.Raw | null) | null;
        model_version_id?: (string | null) | null;
        prompt_version_id: string;
        type?: VellumVariableType.Raw | null;
        deployment_release_tag: string;
        model_name: string;
    }
}
