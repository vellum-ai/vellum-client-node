/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../../index";

/**
 * @example
 *     {}
 */
export interface PatchedDocumentIndexUpdateRequest {
    /** A human-readable label for the document index */
    label?: string;
    /**
     * The current status of the document index
     *
     * * `ACTIVE` - Active
     * * `ARCHIVED` - Archived
     */
    status?: Vellum.EntityStatus;
    /**
     * The environment this document index is used in
     *
     * * `DEVELOPMENT` - Development
     * * `STAGING` - Staging
     * * `PRODUCTION` - Production
     */
    environment?: Vellum.EnvironmentEnum;
}
