/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { TerminalNodeResultOutput } from "./TerminalNodeResultOutput";

export const TerminalNodeResultData: core.serialization.ObjectSchema<
    serializers.TerminalNodeResultData.Raw,
    Vellum.TerminalNodeResultData
> = core.serialization.object({
    output: TerminalNodeResultOutput,
});

export declare namespace TerminalNodeResultData {
    interface Raw {
        output: TerminalNodeResultOutput.Raw;
    }
}
