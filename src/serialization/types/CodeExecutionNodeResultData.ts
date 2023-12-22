/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const CodeExecutionNodeResultData: core.serialization.ObjectSchema<
    serializers.CodeExecutionNodeResultData.Raw,
    Vellum.CodeExecutionNodeResultData
> = core.serialization.object({
    output: core.serialization.lazy(async () => (await import("..")).CodeExecutionNodeResultOutput),
});

export declare namespace CodeExecutionNodeResultData {
    interface Raw {
        output: serializers.CodeExecutionNodeResultOutput.Raw;
    }
}