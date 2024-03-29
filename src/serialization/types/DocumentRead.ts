/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const DocumentRead: core.serialization.ObjectSchema<serializers.DocumentRead.Raw, Vellum.DocumentRead> =
    core.serialization.object({
        id: core.serialization.string(),
        externalId: core.serialization.property("external_id", core.serialization.string().optional()),
        lastUploadedAt: core.serialization.property("last_uploaded_at", core.serialization.date()),
        label: core.serialization.string(),
        processingState: core.serialization.property(
            "processing_state",
            core.serialization.lazy(async () => (await import("..")).ProcessingStateEnum).optional()
        ),
        status: core.serialization.lazy(async () => (await import("..")).DocumentStatus).optional(),
        originalFileUrl: core.serialization.property("original_file_url", core.serialization.string().optional()),
        processedFileUrl: core.serialization.property("processed_file_url", core.serialization.string().optional()),
        documentToDocumentIndexes: core.serialization.property(
            "document_to_document_indexes",
            core.serialization.list(
                core.serialization.lazyObject(async () => (await import("..")).DocumentDocumentToDocumentIndex)
            )
        ),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace DocumentRead {
    interface Raw {
        id: string;
        external_id?: string | null;
        last_uploaded_at: string;
        label: string;
        processing_state?: serializers.ProcessingStateEnum.Raw | null;
        status?: serializers.DocumentStatus.Raw | null;
        original_file_url?: string | null;
        processed_file_url?: string | null;
        document_to_document_indexes: serializers.DocumentDocumentToDocumentIndex.Raw[];
        metadata?: Record<string, unknown> | null;
    }
}
