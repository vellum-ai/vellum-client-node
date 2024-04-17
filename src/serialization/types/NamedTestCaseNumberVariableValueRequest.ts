/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const NamedTestCaseNumberVariableValueRequest: core.serialization.ObjectSchema<
    serializers.NamedTestCaseNumberVariableValueRequest.Raw,
    Vellum.NamedTestCaseNumberVariableValueRequest
> = core.serialization.object({
    value: core.serialization.number().optional(),
    name: core.serialization.string(),
});

export declare namespace NamedTestCaseNumberVariableValueRequest {
    interface Raw {
        value?: number | null;
        name: string;
    }
}
