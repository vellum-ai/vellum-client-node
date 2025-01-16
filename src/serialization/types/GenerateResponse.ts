/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { GenerateResult } from "./GenerateResult";

export const GenerateResponse: core.serialization.ObjectSchema<
    serializers.GenerateResponse.Raw,
    Vellum.GenerateResponse
> = core.serialization.object({
    results: core.serialization.list(GenerateResult),
});

export declare namespace GenerateResponse {
    export interface Raw {
        results: GenerateResult.Raw[];
    }
}
