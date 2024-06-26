/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const PdfEnum: core.serialization.Schema<serializers.PdfEnum.Raw, Vellum.PdfEnum> =
    core.serialization.stringLiteral("PDF");

export declare namespace PdfEnum {
    type Raw = "PDF";
}
