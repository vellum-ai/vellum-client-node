/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type CodeExecutionNodeResultOutput =
    | Vellum.CodeExecutionNodeStringResult
    | Vellum.CodeExecutionNodeNumberResult
    | Vellum.CodeExecutionNodeJsonResult
    | Vellum.CodeExecutionNodeChatHistoryResult
    | Vellum.CodeExecutionNodeSearchResultsResult
    | Vellum.CodeExecutionNodeErrorResult
    | Vellum.CodeExecutionNodeArrayResult
    | Vellum.CodeExecutionNodeFunctionCallResult;
