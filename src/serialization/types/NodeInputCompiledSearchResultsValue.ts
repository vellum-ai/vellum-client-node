/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { SearchResult } from "./SearchResult";

export const NodeInputCompiledSearchResultsValue: core.serialization.ObjectSchema<
    serializers.NodeInputCompiledSearchResultsValue.Raw,
    Vellum.NodeInputCompiledSearchResultsValue
> = core.serialization.object({
    nodeInputId: core.serialization.property("node_input_id", core.serialization.string()),
    key: core.serialization.string(),
    type: core.serialization.stringLiteral("SEARCH_RESULTS"),
    value: core.serialization.list(SearchResult).optional(),
});

export declare namespace NodeInputCompiledSearchResultsValue {
    interface Raw {
        node_input_id: string;
        key: string;
        type: "SEARCH_RESULTS";
        value?: SearchResult.Raw[] | null;
    }
}
