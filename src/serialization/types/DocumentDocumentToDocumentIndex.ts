/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { IndexingStateEnum } from "./IndexingStateEnum";

export const DocumentDocumentToDocumentIndex: core.serialization.ObjectSchema<
    serializers.DocumentDocumentToDocumentIndex.Raw,
    Vellum.DocumentDocumentToDocumentIndex
> = core.serialization.object({
    id: core.serialization.string(),
    environmentDocumentIndexId: core.serialization.property(
        "environment_document_index_id",
        core.serialization.string(),
    ),
    documentIndexId: core.serialization.property("document_index_id", core.serialization.string()),
    indexingState: core.serialization.property("indexing_state", IndexingStateEnum.optional()),
    extractedTextFileUrl: core.serialization.property(
        "extracted_text_file_url",
        core.serialization.string().optionalNullable(),
    ),
});

export declare namespace DocumentDocumentToDocumentIndex {
    export interface Raw {
        id: string;
        environment_document_index_id: string;
        document_index_id: string;
        indexing_state?: IndexingStateEnum.Raw | null;
        extracted_text_file_url?: (string | null) | null;
    }
}
