/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TikTokenTokenizerConfigRequest: core.serialization.ObjectSchema<
    serializers.TikTokenTokenizerConfigRequest.Raw,
    Vellum.TikTokenTokenizerConfigRequest
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace TikTokenTokenizerConfigRequest {
    interface Raw {
        name: string;
    }
}
