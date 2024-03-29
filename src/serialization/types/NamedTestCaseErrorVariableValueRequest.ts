/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const NamedTestCaseErrorVariableValueRequest: core.serialization.ObjectSchema<
    serializers.NamedTestCaseErrorVariableValueRequest.Raw,
    Vellum.NamedTestCaseErrorVariableValueRequest
> = core.serialization.object({
    name: core.serialization.string(),
    value: core.serialization.lazyObject(async () => (await import("..")).VellumErrorRequest).optional(),
});

export declare namespace NamedTestCaseErrorVariableValueRequest {
    interface Raw {
        name: string;
        value?: serializers.VellumErrorRequest.Raw | null;
    }
}
