/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumImage } from "./VellumImage";

export const WorkflowOutputImage: core.serialization.ObjectSchema<
    serializers.WorkflowOutputImage.Raw,
    Vellum.WorkflowOutputImage
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("IMAGE"),
    value: VellumImage.optional(),
});

export declare namespace WorkflowOutputImage {
    export interface Raw {
        id: string;
        name: string;
        type: "IMAGE";
        value?: VellumImage.Raw | null;
    }
}
