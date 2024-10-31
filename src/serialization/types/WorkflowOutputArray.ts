/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const WorkflowOutputArray: core.serialization.ObjectSchema<
    serializers.WorkflowOutputArray.Raw,
    Vellum.WorkflowOutputArray
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("ARRAY"),
    value: core.serialization.list(core.serialization.lazy(() => serializers.VellumValue)).optional(),
});

export declare namespace WorkflowOutputArray {
    interface Raw {
        id: string;
        name: string;
        type: "ARRAY";
        value?: serializers.VellumValue.Raw[] | null;
    }
}
