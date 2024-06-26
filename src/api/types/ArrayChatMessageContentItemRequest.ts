/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type ArrayChatMessageContentItemRequest =
    | Vellum.ArrayChatMessageContentItemRequest.String
    | Vellum.ArrayChatMessageContentItemRequest.FunctionCall
    | Vellum.ArrayChatMessageContentItemRequest.Image;

export declare namespace ArrayChatMessageContentItemRequest {
    interface String extends Vellum.StringChatMessageContentRequest {
        type: "STRING";
    }

    interface FunctionCall extends Vellum.FunctionCallChatMessageContentRequest {
        type: "FUNCTION_CALL";
    }

    interface Image extends Vellum.ImageChatMessageContentRequest {
        type: "IMAGE";
    }
}
