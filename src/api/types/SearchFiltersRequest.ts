/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface SearchFiltersRequest {
    /** The document external IDs to filter by */
    externalIds?: string[];
    /** The metadata filters to apply to the search */
    metadata?: Vellum.MetadataFiltersRequest;
}
