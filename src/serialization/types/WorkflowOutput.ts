/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowOutputString } from "./WorkflowOutputString";
import { WorkflowOutputNumber } from "./WorkflowOutputNumber";
import { WorkflowOutputJson } from "./WorkflowOutputJson";
import { WorkflowOutputChatHistory } from "./WorkflowOutputChatHistory";
import { WorkflowOutputSearchResults } from "./WorkflowOutputSearchResults";
import { WorkflowOutputArray } from "./WorkflowOutputArray";
import { WorkflowOutputError } from "./WorkflowOutputError";
import { WorkflowOutputFunctionCall } from "./WorkflowOutputFunctionCall";
import { WorkflowOutputImage } from "./WorkflowOutputImage";

export const WorkflowOutput: core.serialization.Schema<serializers.WorkflowOutput.Raw, Vellum.WorkflowOutput> =
    core.serialization.undiscriminatedUnion([
        WorkflowOutputString,
        WorkflowOutputNumber,
        WorkflowOutputJson,
        WorkflowOutputChatHistory,
        WorkflowOutputSearchResults,
        WorkflowOutputArray,
        WorkflowOutputError,
        WorkflowOutputFunctionCall,
        WorkflowOutputImage,
    ]);

export declare namespace WorkflowOutput {
    type Raw =
        | WorkflowOutputString.Raw
        | WorkflowOutputNumber.Raw
        | WorkflowOutputJson.Raw
        | WorkflowOutputChatHistory.Raw
        | WorkflowOutputSearchResults.Raw
        | WorkflowOutputArray.Raw
        | WorkflowOutputError.Raw
        | WorkflowOutputFunctionCall.Raw
        | WorkflowOutputImage.Raw;
}
