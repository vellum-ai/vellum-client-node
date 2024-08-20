/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const HuggingFaceTokenizerConfig: core.serialization.ObjectSchema<
    serializers.HuggingFaceTokenizerConfig.Raw,
    Vellum.HuggingFaceTokenizerConfig
> = core.serialization.object({
    type: core.serialization.stringLiteral("HUGGING_FACE"),
    name: core.serialization.string(),
    path: core.serialization.string().optional(),
});

export declare namespace HuggingFaceTokenizerConfig {
    interface Raw {
        type: "HUGGING_FACE";
        name: string;
        path?: string | null;
    }
}