/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * An image value that is used in a chat message.
 */
export interface ImageChatMessageContentRequest {
    type: "IMAGE";
    value: Vellum.VellumImageRequest;
}
