/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { EntityVisibility } from "./EntityVisibility";
import { ContainerImageContainerImageTag } from "./ContainerImageContainerImageTag";

export const ContainerImageRead: core.serialization.ObjectSchema<
    serializers.ContainerImageRead.Raw,
    Vellum.ContainerImageRead
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    visibility: EntityVisibility,
    created: core.serialization.date(),
    modified: core.serialization.date(),
    repository: core.serialization.string(),
    sha: core.serialization.string(),
    tags: core.serialization.list(ContainerImageContainerImageTag),
});

export declare namespace ContainerImageRead {
    export interface Raw {
        id: string;
        name: string;
        visibility: EntityVisibility.Raw;
        created: string;
        modified: string;
        repository: string;
        sha: string;
        tags: ContainerImageContainerImageTag.Raw[];
    }
}
