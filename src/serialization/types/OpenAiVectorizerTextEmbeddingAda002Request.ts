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
});

export declare namespace OpenAiVectorizerTextEmbeddingAda002Request {
    interface Raw {
        config: OpenAiVectorizerConfigRequest.Raw;
    }
}
