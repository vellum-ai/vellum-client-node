/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { TemplatingNodeResultData } from "./TemplatingNodeResultData";

export const TemplatingNodeResult: core.serialization.ObjectSchema<
    serializers.TemplatingNodeResult.Raw,
    Vellum.TemplatingNodeResult
> = core.serialization.object({
    data: TemplatingNodeResultData,
});

export declare namespace TemplatingNodeResult {
    interface Raw {
        data: TemplatingNodeResultData.Raw;
    }
}
