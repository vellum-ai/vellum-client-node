/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const BasicVectorizerIntfloatMultilingualE5Large: core.serialization.ObjectSchema<
    serializers.BasicVectorizerIntfloatMultilingualE5Large.Raw,
    Vellum.BasicVectorizerIntfloatMultilingualE5Large
> = core.serialization.object({
    config: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optionalNullable(),
    modelName: core.serialization.property(
        "model_name",
        core.serialization.stringLiteral("intfloat/multilingual-e5-large"),
    ),
});

export declare namespace BasicVectorizerIntfloatMultilingualE5Large {
    export interface Raw {
        config?: (Record<string, unknown> | null) | null;
        model_name: "intfloat/multilingual-e5-large";
    }
}
