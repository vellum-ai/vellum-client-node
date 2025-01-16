/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { CodeExecutionNodeResultData } from "./CodeExecutionNodeResultData";

export const CodeExecutionNodeResult: core.serialization.ObjectSchema<
    serializers.CodeExecutionNodeResult.Raw,
    Vellum.CodeExecutionNodeResult
> = core.serialization.object({
    type: core.serialization.stringLiteral("CODE_EXECUTION"),
    data: CodeExecutionNodeResultData,
});

export declare namespace CodeExecutionNodeResult {
    export interface Raw {
        type: "CODE_EXECUTION";
        data: CodeExecutionNodeResultData.Raw;
    }
}
