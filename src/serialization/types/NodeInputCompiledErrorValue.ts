/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumError } from "./VellumError";

export const NodeInputCompiledErrorValue: core.serialization.ObjectSchema<
    serializers.NodeInputCompiledErrorValue.Raw,
    Vellum.NodeInputCompiledErrorValue
> = core.serialization.object({
    nodeInputId: core.serialization.property("node_input_id", core.serialization.string()),
    key: core.serialization.string(),
    type: core.serialization.stringLiteral("ERROR"),
    value: VellumError.optional(),
});

export declare namespace NodeInputCompiledErrorValue {
    export interface Raw {
        node_input_id: string;
        key: string;
        type: "ERROR";
        value?: VellumError.Raw | null;
    }
}
