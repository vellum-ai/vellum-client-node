/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { VellumVariableType } from "./VellumVariableType";

export const RegisteredPromptInputVariableRequest: core.serialization.ObjectSchema<
    serializers.RegisteredPromptInputVariableRequest.Raw,
    Vellum.RegisteredPromptInputVariableRequest
> = core.serialization.object({
    key: core.serialization.string(),
    id: core.serialization.string().optional(),
    type: VellumVariableType.optional(),
});

export declare namespace RegisteredPromptInputVariableRequest {
    interface Raw {
        key: string;
        id?: string | null;
        type?: VellumVariableType.Raw | null;
    }
}
