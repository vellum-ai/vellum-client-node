/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ApiNodeResultData } from "./ApiNodeResultData";

export const ApiNodeResult: core.serialization.ObjectSchema<serializers.ApiNodeResult.Raw, Vellum.ApiNodeResult> =
    core.serialization.object({
        type: core.serialization.stringLiteral("API"),
        data: ApiNodeResultData,
    });

export declare namespace ApiNodeResult {
    interface Raw {
        type: "API";
        data: ApiNodeResultData.Raw;
    }
}
