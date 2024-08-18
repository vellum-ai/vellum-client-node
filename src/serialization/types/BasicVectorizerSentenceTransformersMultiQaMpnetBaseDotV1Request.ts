/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const BasicVectorizerSentenceTransformersMultiQaMpnetBaseDotV1Request: core.serialization.ObjectSchema<
    serializers.BasicVectorizerSentenceTransformersMultiQaMpnetBaseDotV1Request.Raw,
    Vellum.BasicVectorizerSentenceTransformersMultiQaMpnetBaseDotV1Request
> = core.serialization.object({
    modelName: core.serialization.property(
        "model_name",
        core.serialization.stringLiteral("sentence-transformers/multi-qa-mpnet-base-dot-v1")
    ),
    config: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace BasicVectorizerSentenceTransformersMultiQaMpnetBaseDotV1Request {
    interface Raw {
        model_name: "sentence-transformers/multi-qa-mpnet-base-dot-v1";
        config?: Record<string, unknown> | null;
    }
}
