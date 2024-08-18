/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../../index";

/**
 * @example
 *     {
 *         label: "Scenario 1",
 *         inputs: [{
 *                 type: "STRING",
 *                 value: "Hello, world!",
 *                 name: "var_1"
 *             }, {
 *                 type: "STRING",
 *                 value: "Why hello, there!",
 *                 name: "var_2"
 *             }]
 *     }
 *
 * @example
 *     {
 *         label: "Scenario 2",
 *         inputs: [{
 *                 type: "CHAT_HISTORY",
 *                 value: [{
 *                         text: "What's your favorite color?",
 *                         role: Vellum.ChatMessageRole.User
 *                     }, {
 *                         text: "AI's don't have a favorite color.... Yet.",
 *                         role: Vellum.ChatMessageRole.Assistant
 *                     }],
 *                 name: "chat_history"
 *             }]
 *     }
 */
export interface UpsertSandboxScenarioRequestRequest {
    label?: string;
    /** The inputs for the scenario */
    inputs: Vellum.NamedScenarioInputRequest[];
    /** The id of the scenario to update. If none is provided, an id will be generated and a new scenario will be appended. */
    scenarioId?: string;
}
