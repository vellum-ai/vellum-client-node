/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { IndexingStateEnum } from "./IndexingStateEnum";

export const DocumentDocumentToDocumentIndex: core.serialization.ObjectSchema<
    serializers.DocumentDocumentToDocumentIndex.Raw,
    Vellum.DocumentDocumentToDocumentIndex
> = core.serialization.object({
    id: core.serialization.string(),
    documentIndexId: core.serialization.property("document_index_id", core.serialization.string()),
    indexingState: core.serialization.property("indexing_state", IndexingStateEnum.optional()),
});

export declare namespace DocumentDocumentToDocumentIndex {
    interface Raw {
        id: string;
        document_index_id: string;
        indexing_state?: IndexingStateEnum.Raw | null;
    }
}
