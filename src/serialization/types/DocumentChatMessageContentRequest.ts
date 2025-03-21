/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumDocumentRequest } from "./VellumDocumentRequest";

export const DocumentChatMessageContentRequest: core.serialization.ObjectSchema<
    serializers.DocumentChatMessageContentRequest.Raw,
    Vellum.DocumentChatMessageContentRequest
> = core.serialization.object({
    type: core.serialization.stringLiteral("DOCUMENT"),
    value: VellumDocumentRequest,
});

export declare namespace DocumentChatMessageContentRequest {
    export interface Raw {
        type: "DOCUMENT";
        value: VellumDocumentRequest.Raw;
    }
}
