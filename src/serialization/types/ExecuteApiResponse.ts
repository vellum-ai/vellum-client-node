/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const ExecuteApiResponse: core.serialization.ObjectSchema<
    serializers.ExecuteApiResponse.Raw,
    Vellum.ExecuteApiResponse
> = core.serialization.object({
    statusCode: core.serialization.property("status_code", core.serialization.number()),
    text: core.serialization.string(),
    json: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    headers: core.serialization.record(core.serialization.string(), core.serialization.string()),
});

export declare namespace ExecuteApiResponse {
    export interface Raw {
        status_code: number;
        text: string;
        json?: Record<string, unknown> | null;
        headers: Record<string, string>;
    }
}
