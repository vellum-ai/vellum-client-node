/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TestSuiteRunExternalExecConfigTypeEnum: core.serialization.Schema<
    serializers.TestSuiteRunExternalExecConfigTypeEnum.Raw,
    Vellum.TestSuiteRunExternalExecConfigTypeEnum
> = core.serialization.stringLiteral("EXTERNAL");

export declare namespace TestSuiteRunExternalExecConfigTypeEnum {
    type Raw = "EXTERNAL";
}
