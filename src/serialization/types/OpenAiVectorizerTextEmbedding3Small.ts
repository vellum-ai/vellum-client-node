/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { OpenAiVectorizerConfig } from "./OpenAiVectorizerConfig";

export const OpenAiVectorizerTextEmbedding3Small: core.serialization.ObjectSchema<
    serializers.OpenAiVectorizerTextEmbedding3Small.Raw,
    Vellum.OpenAiVectorizerTextEmbedding3Small
> = core.serialization.object({
    config: OpenAiVectorizerConfig,
});

export declare namespace OpenAiVectorizerTextEmbedding3Small {
    interface Raw {
        config: OpenAiVectorizerConfig.Raw;
    }
}