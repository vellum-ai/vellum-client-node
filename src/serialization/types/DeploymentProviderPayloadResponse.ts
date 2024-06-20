/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { DeploymentProviderPayloadResponsePayload } from "./DeploymentProviderPayloadResponsePayload";

export const DeploymentProviderPayloadResponse: core.serialization.ObjectSchema<
    serializers.DeploymentProviderPayloadResponse.Raw,
    Vellum.DeploymentProviderPayloadResponse
> = core.serialization.object({
    payload: DeploymentProviderPayloadResponsePayload,
});

export declare namespace DeploymentProviderPayloadResponse {
    interface Raw {
        payload: DeploymentProviderPayloadResponsePayload.Raw;
    }
}
