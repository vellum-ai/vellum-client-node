/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface ModelVersionBuildConfig {
    /** The name of the base model used to create this model version, as identified by the LLM provider. */
    baseModel: string;
    /** Information about the sandbox snapshot that was used to create this model version, if applicable. */
    sandboxSnapshot?: Vellum.ModelVersionSandboxSnapshot;
    promptVersionId?: string;
}
