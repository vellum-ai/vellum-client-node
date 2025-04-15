/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * The subset of the metadata tracked by Vellum during prompt execution that the request opted into with `expand_meta`.
 */
export interface FulfilledPromptExecutionMeta {
    latency?: number;
    finishReason?: Vellum.FinishReasonEnum;
    usage?: Vellum.MlModelUsage;
    cost?: Vellum.Price;
}
