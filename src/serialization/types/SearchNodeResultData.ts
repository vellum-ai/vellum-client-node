/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { SearchResult } from "./SearchResult";

export const SearchNodeResultData: core.serialization.ObjectSchema<
    serializers.SearchNodeResultData.Raw,
    Vellum.SearchNodeResultData
> = core.serialization.object({
    resultsOutputId: core.serialization.property("results_output_id", core.serialization.string()),
    results: core.serialization.list(SearchResult),
    textOutputId: core.serialization.property("text_output_id", core.serialization.string()),
    text: core.serialization.string().optional(),
});

export declare namespace SearchNodeResultData {
    interface Raw {
        results_output_id: string;
        results: SearchResult.Raw[];
        text_output_id: string;
        text?: string | null;
    }
}
