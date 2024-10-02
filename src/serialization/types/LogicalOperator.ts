/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const LogicalOperator: core.serialization.Schema<serializers.LogicalOperator.Raw, Vellum.LogicalOperator> =
    core.serialization.enum_([
        "=",
        "!=",
        "<",
        ">",
        "<=",
        ">=",
        "contains",
        "beginsWith",
        "endsWith",
        "doesNotContain",
        "doesNotBeginWith",
        "doesNotEndWith",
        "null",
        "notNull",
        "in",
        "notIn",
        "between",
        "notBetween",
        "blank",
        "notBlank",
    ]);

export declare namespace LogicalOperator {
    type Raw =
        | "="
        | "!="
        | "<"
        | ">"
        | "<="
        | ">="
        | "contains"
        | "beginsWith"
        | "endsWith"
        | "doesNotContain"
        | "doesNotBeginWith"
        | "doesNotEndWith"
        | "null"
        | "notNull"
        | "in"
        | "notIn"
        | "between"
        | "notBetween"
        | "blank"
        | "notBlank";
}
