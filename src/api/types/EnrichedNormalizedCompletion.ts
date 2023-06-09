/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface EnrichedNormalizedCompletion {
    /** The Vellum-generated ID of the completion. */
    id: string;
    /** The external ID that was originally provided along with the generation request, which uniquely identifies this generation in an external system. */
    externalId?: string;
    /** The text generated by the LLM. */
    text: string;
    /** The reason the generation finished. */
    finishReason?: Vellum.FinishReasonEnum;
    /** The logprobs of the completion. Only present if specified in the original request options. */
    logprobs?: Vellum.NormalizedLogProbs;
    /** The ID of the model version used to generate this completion. */
    modelVersionId: string;
}
