/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FolderEntityFolderData } from "./FolderEntityFolderData";

export const FolderEntityFolder: core.serialization.ObjectSchema<
    serializers.FolderEntityFolder.Raw,
    Vellum.FolderEntityFolder
> = core.serialization.object({
    id: core.serialization.string(),
    type: core.serialization.stringLiteral("FOLDER"),
    data: FolderEntityFolderData,
});

export declare namespace FolderEntityFolder {
    export interface Raw {
        id: string;
        type: "FOLDER";
        data: FolderEntityFolderData.Raw;
    }
}
