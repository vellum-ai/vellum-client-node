/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const PromptNodeResultData: core.serialization.ObjectSchema<
    serializers.PromptNodeResultData.Raw,
    Vellum.PromptNodeResultData
> = core.serialization.object({
    outputId: core.serialization.property("output_id", core.serialization.string()),
    arrayOutputId: core.serialization.property("array_output_id", core.serialization.string().optional()),
    text: core.serialization.string().optional(),
    delta: core.serialization.string().optional(),
});

export declare namespace PromptNodeResultData {
    interface Raw {
        output_id: string;
        array_output_id?: string | null;
        text?: string | null;
        delta?: string | null;
    }
}
