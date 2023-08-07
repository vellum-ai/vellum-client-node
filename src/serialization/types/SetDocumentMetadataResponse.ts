/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const SetDocumentMetadataResponse: core.serialization.ObjectSchema<
    serializers.SetDocumentMetadataResponse.Raw,
    Vellum.SetDocumentMetadataResponse
> = core.serialization.object({
    documentId: core.serialization.property("document_id", core.serialization.string()),
});

export declare namespace SetDocumentMetadataResponse {
    interface Raw {
        document_id: string;
    }
}
