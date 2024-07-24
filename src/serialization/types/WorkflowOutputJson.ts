/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const WorkflowOutputJson: core.serialization.ObjectSchema<
    serializers.WorkflowOutputJson.Raw,
    Vellum.WorkflowOutputJson
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    value: core.serialization.unknown(),
});

export declare namespace WorkflowOutputJson {
    interface Raw {
        id: string;
        name: string;
        value?: unknown;
    }
}
