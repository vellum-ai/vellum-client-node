/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TerminalNodeNumberResult: core.serialization.ObjectSchema<
    serializers.TerminalNodeNumberResult.Raw,
    Vellum.TerminalNodeNumberResult
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string(),
    value: core.serialization.number().optional(),
});

export declare namespace TerminalNodeNumberResult {
    interface Raw {
        id?: string | null;
        name: string;
        value?: number | null;
    }
}
