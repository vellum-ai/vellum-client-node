/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vellum from "../../../../../api/index";
import * as core from "../../../../../core";

export const AddEntityToFolderRequest: core.serialization.Schema<
    serializers.AddEntityToFolderRequest.Raw,
    Vellum.AddEntityToFolderRequest
> = core.serialization.object({
    entityId: core.serialization.property("entity_id", core.serialization.string()),
});

export declare namespace AddEntityToFolderRequest {
    interface Raw {
        entity_id: string;
    }
}
