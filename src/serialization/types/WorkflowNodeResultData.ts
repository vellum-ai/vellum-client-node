/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { PromptNodeResult } from "./PromptNodeResult";
import { SearchNodeResult } from "./SearchNodeResult";
import { TemplatingNodeResult } from "./TemplatingNodeResult";
import { CodeExecutionNodeResult } from "./CodeExecutionNodeResult";
import { ConditionalNodeResult } from "./ConditionalNodeResult";
import { ApiNodeResult } from "./ApiNodeResult";
import { TerminalNodeResult } from "./TerminalNodeResult";
import { MergeNodeResult } from "./MergeNodeResult";
import { SubworkflowNodeResult } from "./SubworkflowNodeResult";
import { MetricNodeResult } from "./MetricNodeResult";
import { MapNodeResult } from "./MapNodeResult";

export const WorkflowNodeResultData: core.serialization.Schema<
    serializers.WorkflowNodeResultData.Raw,
    Vellum.WorkflowNodeResultData
> = core.serialization.undiscriminatedUnion([
    PromptNodeResult,
    SearchNodeResult,
    TemplatingNodeResult,
    CodeExecutionNodeResult,
    ConditionalNodeResult,
    ApiNodeResult,
    TerminalNodeResult,
    MergeNodeResult,
    SubworkflowNodeResult,
    MetricNodeResult,
    MapNodeResult,
]);

export declare namespace WorkflowNodeResultData {
    type Raw =
        | PromptNodeResult.Raw
        | SearchNodeResult.Raw
        | TemplatingNodeResult.Raw
        | CodeExecutionNodeResult.Raw
        | ConditionalNodeResult.Raw
        | ApiNodeResult.Raw
        | TerminalNodeResult.Raw
        | MergeNodeResult.Raw
        | SubworkflowNodeResult.Raw
        | MetricNodeResult.Raw
        | MapNodeResult.Raw;
}
