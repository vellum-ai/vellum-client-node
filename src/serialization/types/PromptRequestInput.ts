/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { PromptRequestStringInput } from "./PromptRequestStringInput";
import { PromptRequestJsonInput } from "./PromptRequestJsonInput";
import { PromptRequestChatHistoryInput } from "./PromptRequestChatHistoryInput";

export const PromptRequestInput: core.serialization.Schema<
    serializers.PromptRequestInput.Raw,
    Vellum.PromptRequestInput
> = core.serialization.undiscriminatedUnion([
    PromptRequestStringInput,
    PromptRequestJsonInput,
    PromptRequestChatHistoryInput,
]);

export declare namespace PromptRequestInput {
    export type Raw = PromptRequestStringInput.Raw | PromptRequestJsonInput.Raw | PromptRequestChatHistoryInput.Raw;
}
