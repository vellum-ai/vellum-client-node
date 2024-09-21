/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const JsonInputRequest: core.serialization.ObjectSchema<
    serializers.JsonInputRequest.Raw,
    Vellum.JsonInputRequest
> = core.serialization.object({
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("JSON"),
    value: core.serialization.unknown(),
});

export declare namespace JsonInputRequest {
    interface Raw {
        name: string;
        type: "JSON";
        value?: unknown;
    }
}
