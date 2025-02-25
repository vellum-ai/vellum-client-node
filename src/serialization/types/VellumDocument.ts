/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const VellumDocument: core.serialization.ObjectSchema<serializers.VellumDocument.Raw, Vellum.VellumDocument> =
    core.serialization.object({
        src: core.serialization.string(),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace VellumDocument {
    export interface Raw {
        src: string;
        metadata?: Record<string, unknown> | null;
    }
}
