/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { TestCaseStringVariableValue } from "./TestCaseStringVariableValue";
import { TestCaseNumberVariableValue } from "./TestCaseNumberVariableValue";
import { TestCaseJsonVariableValue } from "./TestCaseJsonVariableValue";
import { TestCaseChatHistoryVariableValue } from "./TestCaseChatHistoryVariableValue";
import { TestCaseSearchResultsVariableValue } from "./TestCaseSearchResultsVariableValue";
import { TestCaseErrorVariableValue } from "./TestCaseErrorVariableValue";
import { TestCaseFunctionCallVariableValue } from "./TestCaseFunctionCallVariableValue";

export const TestCaseVariableValue: core.serialization.Schema<
    serializers.TestCaseVariableValue.Raw,
    Vellum.TestCaseVariableValue
> = core.serialization
    .union("type", {
        STRING: TestCaseStringVariableValue,
        NUMBER: TestCaseNumberVariableValue,
        JSON: TestCaseJsonVariableValue,
        CHAT_HISTORY: TestCaseChatHistoryVariableValue,
        SEARCH_RESULTS: TestCaseSearchResultsVariableValue,
        ERROR: TestCaseErrorVariableValue,
        FUNCTION_CALL: TestCaseFunctionCallVariableValue,
    })
    .transform<Vellum.TestCaseVariableValue>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace TestCaseVariableValue {
    type Raw =
        | TestCaseVariableValue.String
        | TestCaseVariableValue.Number
        | TestCaseVariableValue.Json
        | TestCaseVariableValue.ChatHistory
        | TestCaseVariableValue.SearchResults
        | TestCaseVariableValue.Error
        | TestCaseVariableValue.FunctionCall;

    interface String extends TestCaseStringVariableValue.Raw {
        type: "STRING";
    }

    interface Number extends TestCaseNumberVariableValue.Raw {
        type: "NUMBER";
    }

    interface Json extends TestCaseJsonVariableValue.Raw {
        type: "JSON";
    }

    interface ChatHistory extends TestCaseChatHistoryVariableValue.Raw {
        type: "CHAT_HISTORY";
    }

    interface SearchResults extends TestCaseSearchResultsVariableValue.Raw {
        type: "SEARCH_RESULTS";
    }

    interface Error extends TestCaseErrorVariableValue.Raw {
        type: "ERROR";
    }

    interface FunctionCall extends TestCaseFunctionCallVariableValue.Raw {
        type: "FUNCTION_CALL";
    }
}
