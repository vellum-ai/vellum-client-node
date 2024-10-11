/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../../index";

/**
 * @example
 *     {
 *         mlModel: "string",
 *         inputValues: [{
 *                 key: "string",
 *                 type: "STRING",
 *                 value: "string"
 *             }],
 *         inputVariables: [{
 *                 id: "string",
 *                 key: "string",
 *                 type: Vellum.VellumVariableType.String,
 *                 required: true,
 *                 default: {
 *                     type: "STRING",
 *                     value: "string"
 *                 },
 *                 extensions: {
 *                     color: "string"
 *                 }
 *             }],
 *         parameters: {
 *             stop: ["string"],
 *             temperature: 1.1,
 *             maxTokens: 1,
 *             topP: 1.1,
 *             topK: 1,
 *             frequencyPenalty: 1.1,
 *             presencePenalty: 1.1,
 *             logitBias: {
 *                 "string": {
 *                     "key": "value"
 *                 }
 *             },
 *             customParameters: {
 *                 "string": {
 *                     "key": "value"
 *                 }
 *             }
 *         },
 *         blocks: [{
 *                 blockType: "JINJA",
 *                 properties: {
 *                     template: "string",
 *                     templateType: Vellum.VellumVariableType.String
 *                 },
 *                 id: "string",
 *                 state: Vellum.PromptBlockState.Enabled,
 *                 cacheConfig: {
 *                     type: {
 *                         "key": "value"
 *                     }
 *                 }
 *             }],
 *         expandMeta: {
 *             cost: true,
 *             modelName: true,
 *             usage: true,
 *             finishReason: true
 *         }
 *     }
 */
export interface AdHocExecutePromptStreamRequest {
    mlModel: string;
    inputValues: Vellum.PromptRequestInputRequest[];
    inputVariables: Vellum.VellumVariableRequest[];
    parameters: Vellum.PromptParametersRequest;
    blocks: Vellum.PromptBlockRequest[];
    expandMeta?: Vellum.AdHocExpandMetaRequest;
}
