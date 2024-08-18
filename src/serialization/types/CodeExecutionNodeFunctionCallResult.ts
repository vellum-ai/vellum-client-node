/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FunctionCall } from "./FunctionCall";

export const CodeExecutionNodeFunctionCallResult: core.serialization.ObjectSchema<
    serializers.CodeExecutionNodeFunctionCallResult.Raw,
    Vellum.CodeExecutionNodeFunctionCallResult
> = core.serialization.object({
    id: core.serialization.string(),
    type: core.serialization.stringLiteral("FUNCTION_CALL"),
    value: FunctionCall.optional(),
});

export declare namespace CodeExecutionNodeFunctionCallResult {
    interface Raw {
        id: string;
        type: "FUNCTION_CALL";
        value?: FunctionCall.Raw | null;
    }
}
