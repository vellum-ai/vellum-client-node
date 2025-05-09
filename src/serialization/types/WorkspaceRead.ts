/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const WorkspaceRead: core.serialization.ObjectSchema<serializers.WorkspaceRead.Raw, Vellum.WorkspaceRead> =
    core.serialization.object({
        id: core.serialization.string(),
        name: core.serialization.string(),
        label: core.serialization.string(),
        created: core.serialization.date(),
    });

export declare namespace WorkspaceRead {
    export interface Raw {
        id: string;
        name: string;
        label: string;
        created: string;
    }
}
