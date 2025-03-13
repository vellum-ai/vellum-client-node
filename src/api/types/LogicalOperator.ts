/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `=` - EQUALS
 * * `!=` - DOES_NOT_EQUAL
 * * `<` - LESS_THAN
 * * `>` - GREATER_THAN
 * * `<=` - LESS_THAN_OR_EQUAL_TO
 * * `>=` - GREATER_THAN_OR_EQUAL_TO
 * * `contains` - CONTAINS
 * * `beginsWith` - BEGINS_WITH
 * * `endsWith` - ENDS_WITH
 * * `doesNotContain` - DOES_NOT_CONTAIN
 * * `doesNotBeginWith` - DOES_NOT_BEGIN_WITH
 * * `doesNotEndWith` - DOES_NOT_END_WITH
 * * `null` - NULL
 * * `notNull` - NOT_NULL
 * * `in` - IN
 * * `notIn` - NOT_IN
 * * `between` - BETWEEN
 * * `notBetween` - NOT_BETWEEN
 * * `blank` - BLANK
 * * `notBlank` - NOT_BLANK
 * * `coalesce` - COALESCE
 * * `accessField` - ACCESS_FIELD
 * * `parseJson` - PARSE_JSON
 * * `and` - AND
 * * `or` - OR
 */
export type LogicalOperator =
    /**
     * Equals */
    | "="
    /**
     * Does not equal */
    | "!="
    /**
     * Less than */
    | "<"
    /**
     * Greater than */
    | ">"
    /**
     * Less than or equal to */
    | "<="
    /**
     * Greater than or equal to */
    | ">="
    /**
     * Contains */
    | "contains"
    /**
     * Begins with */
    | "beginsWith"
    /**
     * Ends with */
    | "endsWith"
    /**
     * Does not contain */
    | "doesNotContain"
    /**
     * Does not begin with */
    | "doesNotBeginWith"
    /**
     * Does not end with */
    | "doesNotEndWith"
    /**
     * Null */
    | "null"
    /**
     * Not null */
    | "notNull"
    /**
     * In */
    | "in"
    /**
     * Not in */
    | "notIn"
    /**
     * Between */
    | "between"
    /**
     * Not between */
    | "notBetween"
    | "blank"
    | "notBlank"
    | "coalesce"
    | "accessField"
    | "parseJson"
    | "and"
    | "or";
export const LogicalOperator = {
    Equals: "=",
    DoesNotEqual: "!=",
    LessThan: "<",
    GreaterThan: ">",
    LessThanOrEqualTo: "<=",
    GreaterThanOrEqualTo: ">=",
    Contains: "contains",
    BeginsWith: "beginsWith",
    EndsWith: "endsWith",
    DoesNotContain: "doesNotContain",
    DoesNotBeginWith: "doesNotBeginWith",
    DoesNotEndWith: "doesNotEndWith",
    Null: "null",
    NotNull: "notNull",
    In: "in",
    NotIn: "notIn",
    Between: "between",
    NotBetween: "notBetween",
    Blank: "blank",
    NotBlank: "notBlank",
    Coalesce: "coalesce",
    AccessField: "accessField",
    ParseJson: "parseJson",
    And: "and",
    Or: "or",
} as const;
