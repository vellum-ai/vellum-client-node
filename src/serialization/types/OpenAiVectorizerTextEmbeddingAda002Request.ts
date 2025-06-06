/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { OpenAiVectorizerConfigRequest } from "./OpenAiVectorizerConfigRequest";

export const OpenAiVectorizerTextEmbeddingAda002Request: core.serialization.ObjectSchema<
    serializers.OpenAiVectorizerTextEmbeddingAda002Request.Raw,
    Vellum.OpenAiVectorizerTextEmbeddingAda002Request
> = core.serialization.object({
    config: OpenAiVectorizerConfigRequest,
    modelName: core.serialization.property("model_name", core.serialization.stringLiteral("text-embedding-ada-002")),
});

export declare namespace OpenAiVectorizerTextEmbeddingAda002Request {
    export interface Raw {
        config: OpenAiVectorizerConfigRequest.Raw;
        model_name: "text-embedding-ada-002";
    }
}
