/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { StringVellumValueRequest } from "./StringVellumValueRequest";

export const ThinkingVellumValueRequest: core.serialization.ObjectSchema<
    serializers.ThinkingVellumValueRequest.Raw,
    Vellum.ThinkingVellumValueRequest
> = core.serialization.object({
    type: core.serialization.stringLiteral("THINKING"),
    value: StringVellumValueRequest,
});

export declare namespace ThinkingVellumValueRequest {
    export interface Raw {
        type: "THINKING";
        value: StringVellumValueRequest.Raw;
    }
}
