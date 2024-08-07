/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TikTokenTokenizerConfig: core.serialization.ObjectSchema<
    serializers.TikTokenTokenizerConfig.Raw,
    Vellum.TikTokenTokenizerConfig
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace TikTokenTokenizerConfig {
    interface Raw {
        name: string;
    }
}
