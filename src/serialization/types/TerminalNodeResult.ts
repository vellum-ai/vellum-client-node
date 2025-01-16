/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { TerminalNodeResultData } from "./TerminalNodeResultData";

export const TerminalNodeResult: core.serialization.ObjectSchema<
    serializers.TerminalNodeResult.Raw,
    Vellum.TerminalNodeResult
> = core.serialization.object({
    type: core.serialization.stringLiteral("TERMINAL"),
    data: TerminalNodeResultData,
});

export declare namespace TerminalNodeResult {
    export interface Raw {
        type: "TERMINAL";
        data: TerminalNodeResultData.Raw;
    }
}
