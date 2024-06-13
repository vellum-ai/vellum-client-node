/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { EnrichedNormalizedCompletion } from "./EnrichedNormalizedCompletion";

export const GenerateStreamResultData: core.serialization.ObjectSchema<
    serializers.GenerateStreamResultData.Raw,
    Vellum.GenerateStreamResultData
> = core.serialization.object({
    completionIndex: core.serialization.property("completion_index", core.serialization.number()),
    completion: EnrichedNormalizedCompletion,
});

export declare namespace GenerateStreamResultData {
    interface Raw {
        completion_index: number;
        completion: EnrichedNormalizedCompletion.Raw;
    }
}
