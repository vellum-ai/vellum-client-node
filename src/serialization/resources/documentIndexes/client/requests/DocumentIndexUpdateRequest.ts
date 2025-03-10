/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vellum from "../../../../../api/index";
import * as core from "../../../../../core";
import { EntityStatus } from "../../../../types/EntityStatus";
import { EnvironmentEnum } from "../../../../types/EnvironmentEnum";

export const DocumentIndexUpdateRequest: core.serialization.Schema<
    serializers.DocumentIndexUpdateRequest.Raw,
    Vellum.DocumentIndexUpdateRequest
> = core.serialization.object({
    label: core.serialization.string(),
    status: EntityStatus.optional(),
    environment: EnvironmentEnum.optional(),
});

export declare namespace DocumentIndexUpdateRequest {
    export interface Raw {
        label: string;
        status?: EntityStatus.Raw | null;
        environment?: EnvironmentEnum.Raw | null;
    }
}
