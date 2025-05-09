/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumError } from "./VellumError";

export const TerminalNodeErrorResult: core.serialization.ObjectSchema<
    serializers.TerminalNodeErrorResult.Raw,
    Vellum.TerminalNodeErrorResult
> = core.serialization.object({
    id: core.serialization.string().optionalNullable(),
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("ERROR"),
    value: VellumError.optionalNullable(),
});

export declare namespace TerminalNodeErrorResult {
    export interface Raw {
        id?: (string | null) | null;
        name: string;
        type: "ERROR";
        value?: (VellumError.Raw | null) | null;
    }
}
