/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { SlimDeploymentRead } from "./SlimDeploymentRead";

export const PaginatedSlimDeploymentReadList: core.serialization.ObjectSchema<
    serializers.PaginatedSlimDeploymentReadList.Raw,
    Vellum.PaginatedSlimDeploymentReadList
> = core.serialization.object({
    count: core.serialization.number().optional(),
    next: core.serialization.string().optionalNullable(),
    previous: core.serialization.string().optionalNullable(),
    results: core.serialization.list(SlimDeploymentRead).optional(),
});

export declare namespace PaginatedSlimDeploymentReadList {
    export interface Raw {
        count?: number | null;
        next?: (string | null) | null;
        previous?: (string | null) | null;
        results?: SlimDeploymentRead.Raw[] | null;
    }
}
