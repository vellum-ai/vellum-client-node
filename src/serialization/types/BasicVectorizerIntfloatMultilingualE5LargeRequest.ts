/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const BasicVectorizerIntfloatMultilingualE5LargeRequest: core.serialization.ObjectSchema<
    serializers.BasicVectorizerIntfloatMultilingualE5LargeRequest.Raw,
    Vellum.BasicVectorizerIntfloatMultilingualE5LargeRequest
> = core.serialization.object({
    config: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    modelName: core.serialization.property(
        "model_name",
        core.serialization.stringLiteral("intfloat/multilingual-e5-large"),
    ),
});

export declare namespace BasicVectorizerIntfloatMultilingualE5LargeRequest {
    export interface Raw {
        config?: Record<string, unknown> | null;
        model_name: "intfloat/multilingual-e5-large";
    }
}
