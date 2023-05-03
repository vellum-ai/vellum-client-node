/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const SlimDocumentStatusEnum: core.serialization.Schema<
    serializers.SlimDocumentStatusEnum.Raw,
    Vellum.SlimDocumentStatusEnum
> = core.serialization.enum_(["ACTIVE"]);

export declare namespace SlimDocumentStatusEnum {
    type Raw = "ACTIVE";
}
