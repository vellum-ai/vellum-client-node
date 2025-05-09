/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const WorkflowExpandMetaRequest: core.serialization.ObjectSchema<
    serializers.WorkflowExpandMetaRequest.Raw,
    Vellum.WorkflowExpandMetaRequest
> = core.serialization.object({
    usage: core.serialization.boolean().optionalNullable(),
    cost: core.serialization.boolean().optionalNullable(),
    modelName: core.serialization.property("model_name", core.serialization.boolean().optionalNullable()),
});

export declare namespace WorkflowExpandMetaRequest {
    export interface Raw {
        usage?: (boolean | null) | null;
        cost?: (boolean | null) | null;
        model_name?: (boolean | null) | null;
    }
}
