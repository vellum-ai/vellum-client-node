/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumError } from "./VellumError";

export const TemplatingNodeErrorResult: core.serialization.ObjectSchema<
    serializers.TemplatingNodeErrorResult.Raw,
    Vellum.TemplatingNodeErrorResult
> = core.serialization.object({
    id: core.serialization.string(),
    type: core.serialization.stringLiteral("ERROR"),
    value: VellumError.optionalNullable(),
});

export declare namespace TemplatingNodeErrorResult {
    export interface Raw {
        id: string;
        type: "ERROR";
        value?: (VellumError.Raw | null) | null;
    }
}
