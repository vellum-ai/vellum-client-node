/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ConditionCombinator } from "./ConditionCombinator";

export const VellumValueLogicalConditionGroupRequest: core.serialization.ObjectSchema<
    serializers.VellumValueLogicalConditionGroupRequest.Raw,
    Vellum.VellumValueLogicalConditionGroupRequest
> = core.serialization.object({
    type: core.serialization.stringLiteral("LOGICAL_CONDITION_GROUP"),
    conditions: core.serialization.list(core.serialization.lazy(() => serializers.VellumValueLogicalExpressionRequest)),
    combinator: ConditionCombinator,
    negated: core.serialization.boolean(),
});

export declare namespace VellumValueLogicalConditionGroupRequest {
    export interface Raw {
        type: "LOGICAL_CONDITION_GROUP";
        conditions: serializers.VellumValueLogicalExpressionRequest.Raw[];
        combinator: ConditionCombinator.Raw;
        negated: boolean;
    }
}
