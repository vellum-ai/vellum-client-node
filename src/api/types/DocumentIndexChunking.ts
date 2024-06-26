/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type DocumentIndexChunking =
    | Vellum.DocumentIndexChunking.ReductoChunker
    | Vellum.DocumentIndexChunking.SentenceChunker
    | Vellum.DocumentIndexChunking.TokenOverlappingWindowChunker;

export declare namespace DocumentIndexChunking {
    interface ReductoChunker extends Vellum.ReductoChunking {
        chunkerName: "reducto-chunker";
    }

    interface SentenceChunker extends Vellum.SentenceChunking {
        chunkerName: "sentence-chunker";
    }

    interface TokenOverlappingWindowChunker extends Vellum.TokenOverlappingWindowChunking {
        chunkerName: "token-overlapping-window-chunker";
    }
}
