/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const DocumentStatus: core.serialization.Schema<serializers.DocumentStatus.Raw, Vellum.DocumentStatus> =
    core.serialization.stringLiteral("ACTIVE");

export declare namespace DocumentStatus {
    export type Raw = "ACTIVE";
}
