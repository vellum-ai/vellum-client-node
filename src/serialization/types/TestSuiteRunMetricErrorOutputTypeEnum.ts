/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TestSuiteRunMetricErrorOutputTypeEnum: core.serialization.Schema<
    serializers.TestSuiteRunMetricErrorOutputTypeEnum.Raw,
    Vellum.TestSuiteRunMetricErrorOutputTypeEnum
> = core.serialization.stringLiteral("ERROR");

export declare namespace TestSuiteRunMetricErrorOutputTypeEnum {
    type Raw = "ERROR";
}
