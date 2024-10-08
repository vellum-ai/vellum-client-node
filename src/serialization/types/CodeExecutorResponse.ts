/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumValue } from "./VellumValue";

export const CodeExecutorResponse: core.serialization.ObjectSchema<
    serializers.CodeExecutorResponse.Raw,
    Vellum.CodeExecutorResponse
> = core.serialization.object({
    log: core.serialization.string(),
    output: VellumValue,
});

export declare namespace CodeExecutorResponse {
    interface Raw {
        log: string;
        output: VellumValue.Raw;
    }
}
