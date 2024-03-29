/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TestCaseVariableValue: core.serialization.Schema<
    serializers.TestCaseVariableValue.Raw,
    Vellum.TestCaseVariableValue
> = core.serialization
    .union("type", {
        STRING: core.serialization.lazyObject(async () => (await import("..")).TestCaseStringVariableValue),
        NUMBER: core.serialization.lazyObject(async () => (await import("..")).TestCaseNumberVariableValue),
        JSON: core.serialization.lazyObject(async () => (await import("..")).TestCaseJsonVariableValue),
        CHAT_HISTORY: core.serialization.lazyObject(async () => (await import("..")).TestCaseChatHistoryVariableValue),
        SEARCH_RESULTS: core.serialization.lazyObject(
            async () => (await import("..")).TestCaseSearchResultsVariableValue
        ),
        ERROR: core.serialization.lazyObject(async () => (await import("..")).TestCaseErrorVariableValue),
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
        | TestCaseVariableValue.Error;

    interface String extends serializers.TestCaseStringVariableValue.Raw {
        type: "STRING";
    }

    interface Number extends serializers.TestCaseNumberVariableValue.Raw {
        type: "NUMBER";
    }

    interface Json extends serializers.TestCaseJsonVariableValue.Raw {
        type: "JSON";
    }

    interface ChatHistory extends serializers.TestCaseChatHistoryVariableValue.Raw {
        type: "CHAT_HISTORY";
    }

    interface SearchResults extends serializers.TestCaseSearchResultsVariableValue.Raw {
        type: "SEARCH_RESULTS";
    }

    interface Error extends serializers.TestCaseErrorVariableValue.Raw {
        type: "ERROR";
    }
}
