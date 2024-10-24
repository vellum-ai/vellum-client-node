/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FolderEntity } from "./FolderEntity";

export const PaginatedFolderEntityList: core.serialization.ObjectSchema<
    serializers.PaginatedFolderEntityList.Raw,
    Vellum.PaginatedFolderEntityList
> = core.serialization.object({
    count: core.serialization.number().optional(),
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(FolderEntity).optional(),
});

export declare namespace PaginatedFolderEntityList {
    interface Raw {
        count?: number | null;
        next?: string | null;
        previous?: string | null;
        results?: FolderEntity.Raw[] | null;
    }
}