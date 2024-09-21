/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { JinjaPromptBlockRequest } from "./JinjaPromptBlockRequest";
import { FunctionDefinitionPromptBlockRequest } from "./FunctionDefinitionPromptBlockRequest";
import { VariablePromptBlockRequest } from "./VariablePromptBlockRequest";
import { RichTextPromptBlockRequest } from "./RichTextPromptBlockRequest";

export const PromptBlockRequest: core.serialization.Schema<
    serializers.PromptBlockRequest.Raw,
    Vellum.PromptBlockRequest
> = core.serialization.undiscriminatedUnion([
    JinjaPromptBlockRequest,
    core.serialization.lazyObject(() => serializers.ChatMessagePromptBlockRequest),
    FunctionDefinitionPromptBlockRequest,
    VariablePromptBlockRequest,
    RichTextPromptBlockRequest,
]);

export declare namespace PromptBlockRequest {
    type Raw =
        | JinjaPromptBlockRequest.Raw
        | serializers.ChatMessagePromptBlockRequest.Raw
        | FunctionDefinitionPromptBlockRequest.Raw
        | VariablePromptBlockRequest.Raw
        | RichTextPromptBlockRequest.Raw;
}