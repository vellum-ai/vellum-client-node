/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { SearchNodeResultData } from "./SearchNodeResultData";

export const SearchNodeResult: core.serialization.ObjectSchema<
    serializers.SearchNodeResult.Raw,
    Vellum.SearchNodeResult
> = core.serialization.object({
    data: SearchNodeResultData,
});

export declare namespace SearchNodeResult {
    interface Raw {
        data: SearchNodeResultData.Raw;
    }
}
