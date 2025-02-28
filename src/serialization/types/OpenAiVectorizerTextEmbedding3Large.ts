/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { OpenAiVectorizerConfig } from "./OpenAiVectorizerConfig";

export const OpenAiVectorizerTextEmbedding3Large: core.serialization.ObjectSchema<
    serializers.OpenAiVectorizerTextEmbedding3Large.Raw,
    Vellum.OpenAiVectorizerTextEmbedding3Large
> = core.serialization.object({
    config: OpenAiVectorizerConfig,
    modelName: core.serialization.property("model_name", core.serialization.stringLiteral("text-embedding-3-large")),
});

export declare namespace OpenAiVectorizerTextEmbedding3Large {
    export interface Raw {
        config: OpenAiVectorizerConfig.Raw;
        model_name: "text-embedding-3-large";
    }
}
