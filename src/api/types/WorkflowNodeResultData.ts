/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export type WorkflowNodeResultData =
    | Vellum.WorkflowNodeResultData.Prompt
    | Vellum.WorkflowNodeResultData.Sandbox
    | Vellum.WorkflowNodeResultData.Deployment
    | Vellum.WorkflowNodeResultData.Search
    | Vellum.WorkflowNodeResultData.Conditional
    | Vellum.WorkflowNodeResultData.Terminal;

export declare namespace WorkflowNodeResultData {
    interface Prompt extends Vellum.PromptNodeResult {
        type: "PROMPT";
    }

    interface Sandbox extends Vellum.SandboxNodeResult {
        type: "SANDBOX";
    }

    interface Deployment extends Vellum.DeploymentNodeResult {
        type: "DEPLOYMENT";
    }

    interface Search extends Vellum.SearchNodeResult {
        type: "SEARCH";
    }

    interface Conditional extends Vellum.ConditionalNodeResult {
        type: "CONDITIONAL";
    }

    interface Terminal extends Vellum.TerminalNodeResult {
        type: "TERMINAL";
    }
}