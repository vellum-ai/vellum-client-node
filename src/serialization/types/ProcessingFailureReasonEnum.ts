/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ProcessingFailureReasonEnum: core.serialization.Schema<
    serializers.ProcessingFailureReasonEnum.Raw,
    Vellum.ProcessingFailureReasonEnum
> = core.serialization.stringLiteral("EXCEEDED_CHARACTER_LIMIT");

export declare namespace ProcessingFailureReasonEnum {
    type Raw = "EXCEEDED_CHARACTER_LIMIT";
}
