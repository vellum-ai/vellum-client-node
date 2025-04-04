/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface ReleaseReleaseTag {
    /** The name of the Release Tag */
    name: string;
    /**
     * The source of how the Release Tag was originally created
     *
     * * `SYSTEM` - System
     * * `USER` - User
     */
    source: Vellum.ReleaseTagSource;
}
