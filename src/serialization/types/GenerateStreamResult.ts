/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { GenerateStreamResultData } from "./GenerateStreamResultData";
import { GenerateResultError } from "./GenerateResultError";

export const GenerateStreamResult: core.serialization.ObjectSchema<
    serializers.GenerateStreamResult.Raw,
    Vellum.GenerateStreamResult
> = core.serialization.object({
    requestIndex: core.serialization.property("request_index", core.serialization.number()),
    data: GenerateStreamResultData.optional(),
    error: GenerateResultError.optional(),
});

export declare namespace GenerateStreamResult {
    interface Raw {
        request_index: number;
        data?: GenerateStreamResultData.Raw | null;
        error?: GenerateResultError.Raw | null;
    }
}
