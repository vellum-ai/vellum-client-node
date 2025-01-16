/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { CodeExecutionNodeStringResult } from "./CodeExecutionNodeStringResult";
import { CodeExecutionNodeNumberResult } from "./CodeExecutionNodeNumberResult";
import { CodeExecutionNodeJsonResult } from "./CodeExecutionNodeJsonResult";
import { CodeExecutionNodeChatHistoryResult } from "./CodeExecutionNodeChatHistoryResult";
import { CodeExecutionNodeSearchResultsResult } from "./CodeExecutionNodeSearchResultsResult";
import { CodeExecutionNodeErrorResult } from "./CodeExecutionNodeErrorResult";
import { CodeExecutionNodeArrayResult } from "./CodeExecutionNodeArrayResult";
import { CodeExecutionNodeFunctionCallResult } from "./CodeExecutionNodeFunctionCallResult";

export const CodeExecutionNodeResultOutput: core.serialization.Schema<
    serializers.CodeExecutionNodeResultOutput.Raw,
    Vellum.CodeExecutionNodeResultOutput
> = core.serialization.undiscriminatedUnion([
    CodeExecutionNodeStringResult,
    CodeExecutionNodeNumberResult,
    CodeExecutionNodeJsonResult,
    CodeExecutionNodeChatHistoryResult,
    CodeExecutionNodeSearchResultsResult,
    CodeExecutionNodeErrorResult,
    CodeExecutionNodeArrayResult,
    CodeExecutionNodeFunctionCallResult,
]);

export declare namespace CodeExecutionNodeResultOutput {
    export type Raw =
        | CodeExecutionNodeStringResult.Raw
        | CodeExecutionNodeNumberResult.Raw
        | CodeExecutionNodeJsonResult.Raw
        | CodeExecutionNodeChatHistoryResult.Raw
        | CodeExecutionNodeSearchResultsResult.Raw
        | CodeExecutionNodeErrorResult.Raw
        | CodeExecutionNodeArrayResult.Raw
        | CodeExecutionNodeFunctionCallResult.Raw;
}
