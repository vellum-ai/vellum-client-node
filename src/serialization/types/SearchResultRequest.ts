/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { SearchResultDocumentRequest } from "./SearchResultDocumentRequest";
import { SearchResultMetaRequest } from "./SearchResultMetaRequest";

export const SearchResultRequest: core.serialization.ObjectSchema<
    serializers.SearchResultRequest.Raw,
    Vellum.SearchResultRequest
> = core.serialization.object({
    text: core.serialization.string(),
    score: core.serialization.number(),
    keywords: core.serialization.list(core.serialization.string()),
    document: SearchResultDocumentRequest,
    meta: SearchResultMetaRequest.optionalNullable(),
});

export declare namespace SearchResultRequest {
    export interface Raw {
        text: string;
        score: number;
        keywords: string[];
        document: SearchResultDocumentRequest.Raw;
        meta?: (SearchResultMetaRequest.Raw | null) | null;
    }
}
