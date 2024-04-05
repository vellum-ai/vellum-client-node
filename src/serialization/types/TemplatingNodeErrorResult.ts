/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { VellumError } from "./VellumError";

export const TemplatingNodeErrorResult: core.serialization.ObjectSchema<
    serializers.TemplatingNodeErrorResult.Raw,
    Vellum.TemplatingNodeErrorResult
> = core.serialization.object({
    id: core.serialization.string(),
    value: VellumError.optional(),
});

export declare namespace TemplatingNodeErrorResult {
    interface Raw {
        id: string;
        value?: VellumError.Raw | null;
    }
}
