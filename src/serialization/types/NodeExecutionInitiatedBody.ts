/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumCodeResourceDefinition } from "./VellumCodeResourceDefinition";

export const NodeExecutionInitiatedBody: core.serialization.ObjectSchema<
    serializers.NodeExecutionInitiatedBody.Raw,
    Vellum.NodeExecutionInitiatedBody
> = core.serialization.object({
    nodeDefinition: core.serialization.property("node_definition", VellumCodeResourceDefinition),
    inputs: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
});

export declare namespace NodeExecutionInitiatedBody {
    export interface Raw {
        node_definition: VellumCodeResourceDefinition.Raw;
        inputs: Record<string, unknown>;
    }
}
