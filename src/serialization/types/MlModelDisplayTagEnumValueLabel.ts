/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { MlModelDisplayTag } from "./MlModelDisplayTag";

export const MlModelDisplayTagEnumValueLabel: core.serialization.ObjectSchema<
    serializers.MlModelDisplayTagEnumValueLabel.Raw,
    Vellum.MlModelDisplayTagEnumValueLabel
> = core.serialization.object({
    label: core.serialization.string(),
    value: MlModelDisplayTag,
});

export declare namespace MlModelDisplayTagEnumValueLabel {
    interface Raw {
        label: string;
        value: MlModelDisplayTag.Raw;
    }
}
