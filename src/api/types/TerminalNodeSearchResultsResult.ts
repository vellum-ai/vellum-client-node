/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface TerminalNodeSearchResultsResult {
    id?: string;
    /** The unique name given to the terminal node that produced this output. */
    name: string;
    value?: Vellum.SearchResult[];
}
