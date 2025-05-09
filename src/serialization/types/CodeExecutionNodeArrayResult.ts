/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const CodeExecutionNodeArrayResult: core.serialization.ObjectSchema<
    serializers.CodeExecutionNodeArrayResult.Raw,
    Vellum.CodeExecutionNodeArrayResult
> = core.serialization.object({
    id: core.serialization.string(),
    type: core.serialization.stringLiteral("ARRAY"),
    value: core.serialization.list(core.serialization.lazy(() => serializers.VellumValue)).optionalNullable(),
});

export declare namespace CodeExecutionNodeArrayResult {
    export interface Raw {
        id: string;
        type: "ARRAY";
        value?: (serializers.VellumValue.Raw[] | null) | null;
    }
}
