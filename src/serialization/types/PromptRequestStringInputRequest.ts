/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const PromptRequestStringInputRequest: core.serialization.ObjectSchema<
    serializers.PromptRequestStringInputRequest.Raw,
    Vellum.PromptRequestStringInputRequest
> = core.serialization.object({
    key: core.serialization.string(),
    type: core.serialization.stringLiteral("STRING"),
    value: core.serialization.string(),
});

export declare namespace PromptRequestStringInputRequest {
    interface Raw {
        key: string;
        type: "STRING";
        value: string;
    }
}
