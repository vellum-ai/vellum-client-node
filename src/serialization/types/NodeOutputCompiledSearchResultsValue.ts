/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { SearchResult } from "./SearchResult";
import { WorkflowNodeResultEventState } from "./WorkflowNodeResultEventState";

export const NodeOutputCompiledSearchResultsValue: core.serialization.ObjectSchema<
    serializers.NodeOutputCompiledSearchResultsValue.Raw,
    Vellum.NodeOutputCompiledSearchResultsValue
> = core.serialization.object({
    value: core.serialization.list(SearchResult).optional(),
    nodeOutputId: core.serialization.property("node_output_id", core.serialization.string()),
    state: WorkflowNodeResultEventState.optional(),
});

export declare namespace NodeOutputCompiledSearchResultsValue {
    interface Raw {
        value?: SearchResult.Raw[] | null;
        node_output_id: string;
        state?: WorkflowNodeResultEventState.Raw | null;
    }
}
