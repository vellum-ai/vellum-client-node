/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const AdHocExpandMeta: core.serialization.ObjectSchema<serializers.AdHocExpandMeta.Raw, Vellum.AdHocExpandMeta> =
    core.serialization.object({
        cost: core.serialization.boolean().optional(),
        modelName: core.serialization.property("model_name", core.serialization.boolean().optional()),
        usage: core.serialization.boolean().optional(),
        finishReason: core.serialization.property("finish_reason", core.serialization.boolean().optional()),
    });

export declare namespace AdHocExpandMeta {
    interface Raw {
        cost?: boolean | null;
        model_name?: boolean | null;
        usage?: boolean | null;
        finish_reason?: boolean | null;
    }
}