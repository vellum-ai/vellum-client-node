/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const SentenceChunkerEnum: core.serialization.Schema<
    serializers.SentenceChunkerEnum.Raw,
    Vellum.SentenceChunkerEnum
> = core.serialization.stringLiteral("sentence-chunker");

export declare namespace SentenceChunkerEnum {
    type Raw = "sentence-chunker";
}
