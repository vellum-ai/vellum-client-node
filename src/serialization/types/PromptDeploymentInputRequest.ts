/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { StringInputRequest } from "./StringInputRequest";
import { JsonInputRequest } from "./JsonInputRequest";
import { ChatHistoryInputRequest } from "./ChatHistoryInputRequest";

export const PromptDeploymentInputRequest: core.serialization.Schema<
    serializers.PromptDeploymentInputRequest.Raw,
    Vellum.PromptDeploymentInputRequest
> = core.serialization.undiscriminatedUnion([StringInputRequest, JsonInputRequest, ChatHistoryInputRequest]);

export declare namespace PromptDeploymentInputRequest {
    type Raw = StringInputRequest.Raw | JsonInputRequest.Raw | ChatHistoryInputRequest.Raw;
}
