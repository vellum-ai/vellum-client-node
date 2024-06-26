/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { PdfSearchResultMetaSource } from "./PdfSearchResultMetaSource";

export const SearchResultMetaSource: core.serialization.Schema<
    serializers.SearchResultMetaSource.Raw,
    Vellum.SearchResultMetaSource
> = core.serialization
    .union(core.serialization.discriminant("documentType", "document_type"), {
        PDF: PdfSearchResultMetaSource,
    })
    .transform<Vellum.SearchResultMetaSource>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace SearchResultMetaSource {
    type Raw = SearchResultMetaSource.Pdf;

    interface Pdf extends PdfSearchResultMetaSource.Raw {
        document_type: "PDF";
    }
}
