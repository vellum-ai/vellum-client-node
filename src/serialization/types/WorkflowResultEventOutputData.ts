/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowResultEventOutputDataString } from "./WorkflowResultEventOutputDataString";
import { WorkflowResultEventOutputDataNumber } from "./WorkflowResultEventOutputDataNumber";
import { WorkflowResultEventOutputDataJson } from "./WorkflowResultEventOutputDataJson";
import { WorkflowResultEventOutputDataChatHistory } from "./WorkflowResultEventOutputDataChatHistory";
import { WorkflowResultEventOutputDataSearchResults } from "./WorkflowResultEventOutputDataSearchResults";
import { WorkflowResultEventOutputDataArray } from "./WorkflowResultEventOutputDataArray";
import { WorkflowResultEventOutputDataFunctionCall } from "./WorkflowResultEventOutputDataFunctionCall";
import { WorkflowResultEventOutputDataError } from "./WorkflowResultEventOutputDataError";

export const WorkflowResultEventOutputData: core.serialization.Schema<
    serializers.WorkflowResultEventOutputData.Raw,
    Vellum.WorkflowResultEventOutputData
> = core.serialization.undiscriminatedUnion([
    WorkflowResultEventOutputDataString,
    WorkflowResultEventOutputDataNumber,
    WorkflowResultEventOutputDataJson,
    WorkflowResultEventOutputDataChatHistory,
    WorkflowResultEventOutputDataSearchResults,
    WorkflowResultEventOutputDataArray,
    WorkflowResultEventOutputDataFunctionCall,
    WorkflowResultEventOutputDataError,
]);

export declare namespace WorkflowResultEventOutputData {
    export type Raw =
        | WorkflowResultEventOutputDataString.Raw
        | WorkflowResultEventOutputDataNumber.Raw
        | WorkflowResultEventOutputDataJson.Raw
        | WorkflowResultEventOutputDataChatHistory.Raw
        | WorkflowResultEventOutputDataSearchResults.Raw
        | WorkflowResultEventOutputDataArray.Raw
        | WorkflowResultEventOutputDataFunctionCall.Raw
        | WorkflowResultEventOutputDataError.Raw;
}
