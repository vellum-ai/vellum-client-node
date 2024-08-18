/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { OpenAiVectorizerConfig } from "./OpenAiVectorizerConfig";

export const OpenAiVectorizerTextEmbeddingAda002: core.serialization.ObjectSchema<
    serializers.OpenAiVectorizerTextEmbeddingAda002.Raw,
    Vellum.OpenAiVectorizerTextEmbeddingAda002
> = core.serialization.object({
    config: OpenAiVectorizerConfig,
    modelName: core.serialization.property("model_name", core.serialization.stringLiteral("text-embedding-ada-002")),
});

export declare namespace OpenAiVectorizerTextEmbeddingAda002 {
    interface Raw {
        config: OpenAiVectorizerConfig.Raw;
        model_name: "text-embedding-ada-002";
    }
}
