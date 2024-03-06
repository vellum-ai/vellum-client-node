/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - `WORKFLOW_INITIALIZATION` - WORKFLOW_INITIALIZATION
 * - `NODE_EXECUTION_COUNT_LIMIT_REACHED` - NODE_EXECUTION_COUNT_LIMIT_REACHED
 * - `INTERNAL_SERVER_ERROR` - INTERNAL_SERVER_ERROR
 * - `NODE_EXECUTION` - NODE_EXECUTION
 * - `LLM_PROVIDER` - LLM_PROVIDER
 * - `INVALID_TEMPLATE` - INVALID_TEMPLATE
 * - `USER_DEFINED_ERROR` - USER_DEFINED_ERROR
 */
export type WorkflowExecutionEventErrorCode =
    | "WORKFLOW_INITIALIZATION"
    | "NODE_EXECUTION_COUNT_LIMIT_REACHED"
    | "INTERNAL_SERVER_ERROR"
    | "NODE_EXECUTION"
    | "LLM_PROVIDER"
    | "INVALID_TEMPLATE"
    | "USER_DEFINED_ERROR";

export const WorkflowExecutionEventErrorCode = {
    WorkflowInitialization: "WORKFLOW_INITIALIZATION",
    NodeExecutionCountLimitReached: "NODE_EXECUTION_COUNT_LIMIT_REACHED",
    InternalServerError: "INTERNAL_SERVER_ERROR",
    NodeExecution: "NODE_EXECUTION",
    LlmProvider: "LLM_PROVIDER",
    InvalidTemplate: "INVALID_TEMPLATE",
    UserDefinedError: "USER_DEFINED_ERROR",
} as const;
