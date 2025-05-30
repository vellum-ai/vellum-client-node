/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../index";
import * as Vellum from "../../../api/index";
import * as core from "../../../core";
import { GenerateRequest } from "../../types/GenerateRequest";
import { GenerateOptionsRequest } from "../../types/GenerateOptionsRequest";

export const GenerateBodyRequest: core.serialization.Schema<
    serializers.GenerateBodyRequest.Raw,
    Vellum.GenerateBodyRequest
> = core.serialization.object({
    deploymentId: core.serialization.property("deployment_id", core.serialization.string().optionalNullable()),
    deploymentName: core.serialization.property("deployment_name", core.serialization.string().optionalNullable()),
    requests: core.serialization.list(GenerateRequest),
    options: GenerateOptionsRequest.optionalNullable(),
});

export declare namespace GenerateBodyRequest {
    export interface Raw {
        deployment_id?: (string | null) | null;
        deployment_name?: (string | null) | null;
        requests: GenerateRequest.Raw[];
        options?: (GenerateOptionsRequest.Raw | null) | null;
    }
}
