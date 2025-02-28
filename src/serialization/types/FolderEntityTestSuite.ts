/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FolderEntityTestSuiteData } from "./FolderEntityTestSuiteData";

export const FolderEntityTestSuite: core.serialization.ObjectSchema<
    serializers.FolderEntityTestSuite.Raw,
    Vellum.FolderEntityTestSuite
> = core.serialization.object({
    id: core.serialization.string(),
    type: core.serialization.stringLiteral("TEST_SUITE"),
    data: FolderEntityTestSuiteData,
});

export declare namespace FolderEntityTestSuite {
    export interface Raw {
        id: string;
        type: "TEST_SUITE";
        data: FolderEntityTestSuiteData.Raw;
    }
}
