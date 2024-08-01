/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../../index";

/**
 * @example
 *     {}
 */
export interface MlModelUpdateRequest {
    /** Configuration for how to display the ML Model. */
    displayConfig?: Vellum.MlModelDisplayConfigRequest;
    /**
     * The visibility of the ML Model.
     *
     * * `DEFAULT` - DEFAULT
     * * `PUBLIC` - PUBLIC
     * * `PRIVATE` - PRIVATE
     * * `DISABLED` - DISABLED
     */
    visibility?: Vellum.VisibilityEnum;
}
