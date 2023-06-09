/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const RegisteredPromptDeployment: core.serialization.ObjectSchema<
    serializers.RegisteredPromptDeployment.Raw,
    Vellum.RegisteredPromptDeployment
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    label: core.serialization.string(),
});

export declare namespace RegisteredPromptDeployment {
    interface Raw {
        id: string;
        name: string;
        label: string;
    }
}
