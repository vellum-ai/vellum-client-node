/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { StringInputRequest } from "./StringInputRequest";
import { JsonInputRequest } from "./JsonInputRequest";
import { ChatHistoryInputRequest } from "./ChatHistoryInputRequest";
import { NumberInputRequest } from "./NumberInputRequest";

export const MetricDefinitionInputRequest: core.serialization.Schema<
    serializers.MetricDefinitionInputRequest.Raw,
    Vellum.MetricDefinitionInputRequest
> = core.serialization.undiscriminatedUnion([
    StringInputRequest,
    JsonInputRequest,
    ChatHistoryInputRequest,
    NumberInputRequest,
]);

export declare namespace MetricDefinitionInputRequest {
    type Raw = StringInputRequest.Raw | JsonInputRequest.Raw | ChatHistoryInputRequest.Raw | NumberInputRequest.Raw;
}