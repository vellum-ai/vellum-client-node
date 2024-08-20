/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { OpenApiIntegerPropertyRequest } from "./OpenApiIntegerPropertyRequest";
import { OpenApiNumberPropertyRequest } from "./OpenApiNumberPropertyRequest";
import { OpenApiStringPropertyRequest } from "./OpenApiStringPropertyRequest";
import { OpenApiBooleanPropertyRequest } from "./OpenApiBooleanPropertyRequest";
import { OpenApiConstPropertyRequest } from "./OpenApiConstPropertyRequest";
import { OpenApiRefPropertyRequest } from "./OpenApiRefPropertyRequest";

export const OpenApiPropertyRequest: core.serialization.Schema<
    serializers.OpenApiPropertyRequest.Raw,
    Vellum.OpenApiPropertyRequest
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(() => serializers.OpenApiArrayPropertyRequest),
    core.serialization.lazyObject(() => serializers.OpenApiObjectPropertyRequest),
    OpenApiIntegerPropertyRequest,
    OpenApiNumberPropertyRequest,
    OpenApiStringPropertyRequest,
    OpenApiBooleanPropertyRequest,
    core.serialization.lazyObject(() => serializers.OpenApiOneOfPropertyRequest),
    OpenApiConstPropertyRequest,
    OpenApiRefPropertyRequest,
]);

export declare namespace OpenApiPropertyRequest {
    type Raw =
        | serializers.OpenApiArrayPropertyRequest.Raw
        | serializers.OpenApiObjectPropertyRequest.Raw
        | OpenApiIntegerPropertyRequest.Raw
        | OpenApiNumberPropertyRequest.Raw
        | OpenApiStringPropertyRequest.Raw
        | OpenApiBooleanPropertyRequest.Raw
        | serializers.OpenApiOneOfPropertyRequest.Raw
        | OpenApiConstPropertyRequest.Raw
        | OpenApiRefPropertyRequest.Raw;
}