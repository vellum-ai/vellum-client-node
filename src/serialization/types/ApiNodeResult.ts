/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ApiNodeResult: core.serialization.ObjectSchema<serializers.ApiNodeResult.Raw, Vellum.ApiNodeResult> =
    core.serialization.object({
        data: core.serialization.lazyObject(async () => (await import("..")).ApiNodeResultData),
    });

export declare namespace ApiNodeResult {
    interface Raw {
        data: serializers.ApiNodeResultData.Raw;
    }
}
