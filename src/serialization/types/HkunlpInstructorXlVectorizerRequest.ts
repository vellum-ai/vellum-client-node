/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { InstructorVectorizerConfigRequest } from "./InstructorVectorizerConfigRequest";

export const HkunlpInstructorXlVectorizerRequest: core.serialization.ObjectSchema<
    serializers.HkunlpInstructorXlVectorizerRequest.Raw,
    Vellum.HkunlpInstructorXlVectorizerRequest
> = core.serialization.object({
    config: InstructorVectorizerConfigRequest,
});

export declare namespace HkunlpInstructorXlVectorizerRequest {
    interface Raw {
        config: InstructorVectorizerConfigRequest.Raw;
    }
}
