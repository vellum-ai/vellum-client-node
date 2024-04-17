/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const NamedTestCaseStringVariableValueRequest: core.serialization.ObjectSchema<
    serializers.NamedTestCaseStringVariableValueRequest.Raw,
    Vellum.NamedTestCaseStringVariableValueRequest
> = core.serialization.object({
    value: core.serialization.string().optional(),
    name: core.serialization.string(),
});

export declare namespace NamedTestCaseStringVariableValueRequest {
    interface Raw {
        value?: string | null;
        name: string;
    }
}
