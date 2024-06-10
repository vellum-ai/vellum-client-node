/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { ReductoChunking } from "./ReductoChunking";
import { SentenceChunking } from "./SentenceChunking";
import { TokenOverlappingWindowChunking } from "./TokenOverlappingWindowChunking";

export const DocumentIndexChunking: core.serialization.Schema<
    serializers.DocumentIndexChunking.Raw,
    Vellum.DocumentIndexChunking
> = core.serialization
    .union(core.serialization.discriminant("chunkerName", "chunker_name"), {
        "reducto-chunker": ReductoChunking,
        "sentence-chunker": SentenceChunking,
        "token-overlapping-window-chunker": TokenOverlappingWindowChunking,
    })
    .transform<Vellum.DocumentIndexChunking>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace DocumentIndexChunking {
    type Raw =
        | DocumentIndexChunking.ReductoChunker
        | DocumentIndexChunking.SentenceChunker
        | DocumentIndexChunking.TokenOverlappingWindowChunker;

    interface ReductoChunker extends ReductoChunking.Raw {
        chunker_name: "reducto-chunker";
    }

    interface SentenceChunker extends SentenceChunking.Raw {
        chunker_name: "sentence-chunker";
    }

    interface TokenOverlappingWindowChunker extends TokenOverlappingWindowChunking.Raw {
        chunker_name: "token-overlapping-window-chunker";
    }
}