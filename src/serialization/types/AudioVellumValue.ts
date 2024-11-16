/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumAudio } from "./VellumAudio";

export const AudioVellumValue: core.serialization.ObjectSchema<
    serializers.AudioVellumValue.Raw,
    Vellum.AudioVellumValue
> = core.serialization.object({
    type: core.serialization.stringLiteral("AUDIO"),
    value: VellumAudio.optional(),
});

export declare namespace AudioVellumValue {
    interface Raw {
        type: "AUDIO";
        value?: VellumAudio.Raw | null;
    }
}