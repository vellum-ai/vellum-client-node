/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface TestSuiteRunExternalExecConfigDataRequest {
    /** The executions of some callable external to Vellum whose outputs you would like to evaluate. */
    executions: Vellum.ExternalTestCaseExecutionRequest[];
}
