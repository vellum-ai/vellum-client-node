/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * Named Prompt Sandbox Scenario input value that is of type CHAT_HISTORY
 */
export interface NamedScenarioInputChatHistoryVariableValueRequest {
    type: "CHAT_HISTORY";
    value?: Vellum.ChatMessageRequest[];
    name: string;
}
