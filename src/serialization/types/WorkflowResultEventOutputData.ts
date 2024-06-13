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
> = core.serialization
    .union("type", {
        STRING: WorkflowResultEventOutputDataString,
        NUMBER: WorkflowResultEventOutputDataNumber,
        JSON: WorkflowResultEventOutputDataJson,
        CHAT_HISTORY: WorkflowResultEventOutputDataChatHistory,
        SEARCH_RESULTS: WorkflowResultEventOutputDataSearchResults,
        ARRAY: WorkflowResultEventOutputDataArray,
        FUNCTION_CALL: WorkflowResultEventOutputDataFunctionCall,
        ERROR: WorkflowResultEventOutputDataError,
    })
    .transform<Vellum.WorkflowResultEventOutputData>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace WorkflowResultEventOutputData {
    type Raw =
        | WorkflowResultEventOutputData.String
        | WorkflowResultEventOutputData.Number
        | WorkflowResultEventOutputData.Json
        | WorkflowResultEventOutputData.ChatHistory
        | WorkflowResultEventOutputData.SearchResults
        | WorkflowResultEventOutputData.Array
        | WorkflowResultEventOutputData.FunctionCall
        | WorkflowResultEventOutputData.Error;

    interface String extends WorkflowResultEventOutputDataString.Raw {
        type: "STRING";
    }

    interface Number extends WorkflowResultEventOutputDataNumber.Raw {
        type: "NUMBER";
    }

    interface Json extends WorkflowResultEventOutputDataJson.Raw {
        type: "JSON";
    }

    interface ChatHistory extends WorkflowResultEventOutputDataChatHistory.Raw {
        type: "CHAT_HISTORY";
    }

    interface SearchResults extends WorkflowResultEventOutputDataSearchResults.Raw {
        type: "SEARCH_RESULTS";
    }

    interface Array extends WorkflowResultEventOutputDataArray.Raw {
        type: "ARRAY";
    }

    interface FunctionCall extends WorkflowResultEventOutputDataFunctionCall.Raw {
        type: "FUNCTION_CALL";
    }

    interface Error extends WorkflowResultEventOutputDataError.Raw {
        type: "ERROR";
    }
}
