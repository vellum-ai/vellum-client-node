/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TextEmbedding3SmallEnum: core.serialization.Schema<
    serializers.TextEmbedding3SmallEnum.Raw,
    Vellum.TextEmbedding3SmallEnum
> = core.serialization.stringLiteral("text-embedding-3-small");

export declare namespace TextEmbedding3SmallEnum {
    type Raw = "text-embedding-3-small";
}
