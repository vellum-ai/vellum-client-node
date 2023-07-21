/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TerminalNodeResult: core.serialization.ObjectSchema<
    serializers.TerminalNodeResult.Raw,
    Vellum.TerminalNodeResult
> = core.serialization.object({
    data: core.serialization.lazyObject(async () => (await import("..")).TerminalNodeResultData),
});

export declare namespace TerminalNodeResult {
    interface Raw {
        data: serializers.TerminalNodeResultData.Raw;
    }
}