/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type MlModelTokenizerConfigRequest =
    | Vellum.MlModelTokenizerConfigRequest.HuggingFace
    | Vellum.MlModelTokenizerConfigRequest.Tiktoken;

export declare namespace MlModelTokenizerConfigRequest {
    interface HuggingFace extends Vellum.HuggingFaceTokenizerConfigRequest {
        type: "HUGGING_FACE";
    }

    interface Tiktoken extends Vellum.TikTokenTokenizerConfigRequest {
        type: "TIKTOKEN";
    }
}
