/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumCodeResourceDefinition } from "./VellumCodeResourceDefinition";

export const NodeExecutionPausedBody: core.serialization.ObjectSchema<
    serializers.NodeExecutionPausedBody.Raw,
    Vellum.NodeExecutionPausedBody
> = core.serialization.object({
    nodeDefinition: core.serialization.property("node_definition", VellumCodeResourceDefinition),
});

export declare namespace NodeExecutionPausedBody {
    export interface Raw {
        node_definition: VellumCodeResourceDefinition.Raw;
    }
}
