/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { SearchResult } from "./SearchResult";

export const NodeInputCompiledSearchResultsValue: core.serialization.ObjectSchema<
    serializers.NodeInputCompiledSearchResultsValue.Raw,
    Vellum.NodeInputCompiledSearchResultsValue
> = core.serialization.object({
    nodeInputId: core.serialization.property("node_input_id", core.serialization.string()),
    key: core.serialization.string(),
    value: core.serialization.list(SearchResult).optional(),
});

export declare namespace NodeInputCompiledSearchResultsValue {
    interface Raw {
        node_input_id: string;
        key: string;
        value?: SearchResult.Raw[] | null;
    }
}
