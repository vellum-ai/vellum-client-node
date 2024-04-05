/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { WorkflowNodeResultEventState } from "./WorkflowNodeResultEventState";
import { SearchResult } from "./SearchResult";

export const WorkflowResultEventOutputDataSearchResults: core.serialization.ObjectSchema<
    serializers.WorkflowResultEventOutputDataSearchResults.Raw,
    Vellum.WorkflowResultEventOutputDataSearchResults
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string(),
    state: WorkflowNodeResultEventState,
    nodeId: core.serialization.property("node_id", core.serialization.string()),
    delta: core.serialization.string().optional(),
    value: core.serialization.list(SearchResult).optional(),
});

export declare namespace WorkflowResultEventOutputDataSearchResults {
    interface Raw {
        id?: string | null;
        name: string;
        state: WorkflowNodeResultEventState.Raw;
        node_id: string;
        delta?: string | null;
        value?: SearchResult.Raw[] | null;
    }
}
