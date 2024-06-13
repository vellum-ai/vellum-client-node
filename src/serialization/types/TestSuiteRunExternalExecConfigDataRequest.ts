/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ExternalTestCaseExecutionRequest } from "./ExternalTestCaseExecutionRequest";

export const TestSuiteRunExternalExecConfigDataRequest: core.serialization.ObjectSchema<
    serializers.TestSuiteRunExternalExecConfigDataRequest.Raw,
    Vellum.TestSuiteRunExternalExecConfigDataRequest
> = core.serialization.object({
    executions: core.serialization.list(ExternalTestCaseExecutionRequest),
});

export declare namespace TestSuiteRunExternalExecConfigDataRequest {
    interface Raw {
        executions: ExternalTestCaseExecutionRequest.Raw[];
    }
}
