/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const ArrayVellumValueRequest: core.serialization.ObjectSchema<
    serializers.ArrayVellumValueRequest.Raw,
    Vellum.ArrayVellumValueRequest
> = core.serialization.object({
    type: core.serialization.stringLiteral("ARRAY"),
    value: core.serialization.list(core.serialization.lazy(() => serializers.VellumValueRequest)).optional(),
});

export declare namespace ArrayVellumValueRequest {
    export interface Raw {
        type: "ARRAY";
        value?: serializers.VellumValueRequest.Raw[] | null;
    }
}
