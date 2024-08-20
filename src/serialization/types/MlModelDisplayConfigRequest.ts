/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { MlModelDisplayTag } from "./MlModelDisplayTag";

export const MlModelDisplayConfigRequest: core.serialization.ObjectSchema<
    serializers.MlModelDisplayConfigRequest.Raw,
    Vellum.MlModelDisplayConfigRequest
> = core.serialization.object({
    label: core.serialization.string(),
    description: core.serialization.string(),
    tags: core.serialization.list(MlModelDisplayTag),
    defaultDisplayPriority: core.serialization.property(
        "default_display_priority",
        core.serialization.number().optional()
    ),
});

export declare namespace MlModelDisplayConfigRequest {
    interface Raw {
        label: string;
        description: string;
        tags: MlModelDisplayTag.Raw[];
        default_display_priority?: number | null;
    }
}