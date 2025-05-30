/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { CodeExecutionNodeResultOutput } from "./CodeExecutionNodeResultOutput";

export const CodeExecutionNodeResultData: core.serialization.ObjectSchema<
    serializers.CodeExecutionNodeResultData.Raw,
    Vellum.CodeExecutionNodeResultData
> = core.serialization.object({
    output: CodeExecutionNodeResultOutput,
    logOutputId: core.serialization.property("log_output_id", core.serialization.string().optionalNullable()),
});

export declare namespace CodeExecutionNodeResultData {
    export interface Raw {
        output: CodeExecutionNodeResultOutput.Raw;
        log_output_id?: (string | null) | null;
    }
}
