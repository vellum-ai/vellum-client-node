/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export type WorkflowNodeResultData =
    | Vellum.WorkflowNodeResultData.Prompt
    | Vellum.WorkflowNodeResultData.Search
    | Vellum.WorkflowNodeResultData.Templating
    | Vellum.WorkflowNodeResultData.CodeExecution
    | Vellum.WorkflowNodeResultData.Conditional
    | Vellum.WorkflowNodeResultData.Api
    | Vellum.WorkflowNodeResultData.Terminal
    | Vellum.WorkflowNodeResultData.Subworkflow;

export declare namespace WorkflowNodeResultData {
    interface Prompt extends Vellum.PromptNodeResult {
        type: "PROMPT";
    }

    interface Search extends Vellum.SearchNodeResult {
        type: "SEARCH";
    }

    interface Templating extends Vellum.TemplatingNodeResult {
        type: "TEMPLATING";
    }

    interface CodeExecution extends Vellum.CodeExecutionNodeResult {
        type: "CODE_EXECUTION";
    }

    interface Conditional extends Vellum.ConditionalNodeResult {
        type: "CONDITIONAL";
    }

    interface Api extends Vellum.ApiNodeResult {
        type: "API";
    }

    interface Terminal extends Vellum.TerminalNodeResult {
        type: "TERMINAL";
    }

    interface Subworkflow extends Vellum.SubworkflowNodeResult {
        type: "SUBWORKFLOW";
    }
}
