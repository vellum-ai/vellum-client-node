/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowNodeResultEventState } from "./WorkflowNodeResultEventState";
import { FunctionCall } from "./FunctionCall";

export const WorkflowResultEventOutputDataFunctionCall: core.serialization.ObjectSchema<
    serializers.WorkflowResultEventOutputDataFunctionCall.Raw,
    Vellum.WorkflowResultEventOutputDataFunctionCall
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string(),
    state: WorkflowNodeResultEventState,
    nodeId: core.serialization.property("node_id", core.serialization.string()),
    delta: core.serialization.string().optional(),
    type: core.serialization.stringLiteral("FUNCTION_CALL"),
    value: FunctionCall.optional(),
});

export declare namespace WorkflowResultEventOutputDataFunctionCall {
    interface Raw {
        id?: string | null;
        name: string;
        state: WorkflowNodeResultEventState.Raw;
        node_id: string;
        delta?: string | null;
        type: "FUNCTION_CALL";
        value?: FunctionCall.Raw | null;
    }
}
