/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A slim representation of a Workflow Sandbox, as it exists within a Folder.
 */
export interface FolderEntityWorkflowSandbox {
    id: string;
    type: "WORKFLOW_SANDBOX";
    data: Vellum.FolderEntityWorkflowSandboxData;
}
