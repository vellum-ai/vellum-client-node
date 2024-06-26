/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const CodeExecutionNodeNumberResult: core.serialization.ObjectSchema<
    serializers.CodeExecutionNodeNumberResult.Raw,
    Vellum.CodeExecutionNodeNumberResult
> = core.serialization.object({
    id: core.serialization.string(),
    value: core.serialization.number().optional(),
});

export declare namespace CodeExecutionNodeNumberResult {
    interface Raw {
        id: string;
        value?: number | null;
    }
}
