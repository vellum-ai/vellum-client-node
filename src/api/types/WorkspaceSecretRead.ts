/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface WorkspaceSecretRead {
    id?: string;
    modified?: Date;
    name: string;
    label: string;
    secretType: Vellum.SecretTypeEnum;
}
