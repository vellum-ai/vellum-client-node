/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { IndexingStateEnum } from "./IndexingStateEnum";

export const SlimDocumentDocumentToDocumentIndex: core.serialization.ObjectSchema<
    serializers.SlimDocumentDocumentToDocumentIndex.Raw,
    Vellum.SlimDocumentDocumentToDocumentIndex
> = core.serialization.object({
    id: core.serialization.string(),
    documentIndexId: core.serialization.property("document_index_id", core.serialization.string()),
    indexingState: core.serialization.property("indexing_state", IndexingStateEnum.optional()),
});

export declare namespace SlimDocumentDocumentToDocumentIndex {
    interface Raw {
        id: string;
        document_index_id: string;
        indexing_state?: IndexingStateEnum.Raw | null;
    }
}
