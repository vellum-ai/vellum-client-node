/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ModelTypeDeprecated: core.serialization.Schema<
    serializers.ModelTypeDeprecated.Raw,
    Vellum.ModelTypeDeprecated
> = core.serialization.enum_(["GENERATE", "CLASSIFY"]);

export declare namespace ModelTypeDeprecated {
    type Raw = "GENERATE" | "CLASSIFY";
}