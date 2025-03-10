/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vellum from "../../../../../api/index";
import * as core from "../../../../../core";
import { EntityStatus } from "../../../../types/EntityStatus";
import { EnvironmentEnum } from "../../../../types/EnvironmentEnum";

export const PatchedDocumentIndexUpdateRequest: core.serialization.Schema<
    serializers.PatchedDocumentIndexUpdateRequest.Raw,
    Vellum.PatchedDocumentIndexUpdateRequest
> = core.serialization.object({
    label: core.serialization.string().optional(),
    status: EntityStatus.optional(),
    environment: EnvironmentEnum.optional(),
});

export declare namespace PatchedDocumentIndexUpdateRequest {
    export interface Raw {
        label?: string | null;
        status?: EntityStatus.Raw | null;
        environment?: EnvironmentEnum.Raw | null;
    }
}
