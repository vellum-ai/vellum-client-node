/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { PromptNodeResultData } from "./PromptNodeResultData";

export const PromptNodeResult: core.serialization.ObjectSchema<
    serializers.PromptNodeResult.Raw,
    Vellum.PromptNodeResult
> = core.serialization.object({
    data: PromptNodeResultData,
});

export declare namespace PromptNodeResult {
    interface Raw {
        data: PromptNodeResultData.Raw;
    }
}
