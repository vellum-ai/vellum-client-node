/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { StringVellumValueRequest } from "./StringVellumValueRequest";
import { NumberVellumValueRequest } from "./NumberVellumValueRequest";
import { JsonVellumValueRequest } from "./JsonVellumValueRequest";
import { ImageVellumValueRequest } from "./ImageVellumValueRequest";
import { FunctionCallVellumValueRequest } from "./FunctionCallVellumValueRequest";
import { ErrorVellumValueRequest } from "./ErrorVellumValueRequest";
import { ChatHistoryVellumValueRequest } from "./ChatHistoryVellumValueRequest";
import { SearchResultsVellumValueRequest } from "./SearchResultsVellumValueRequest";

export const VellumValueRequest: core.serialization.Schema<
    serializers.VellumValueRequest.Raw,
    Vellum.VellumValueRequest
> = core.serialization.undiscriminatedUnion([
    StringVellumValueRequest,
    NumberVellumValueRequest,
    JsonVellumValueRequest,
    ImageVellumValueRequest,
    FunctionCallVellumValueRequest,
    ErrorVellumValueRequest,
    core.serialization.lazyObject(() => serializers.ArrayVellumValueRequest),
    ChatHistoryVellumValueRequest,
    SearchResultsVellumValueRequest,
]);

export declare namespace VellumValueRequest {
    type Raw =
        | StringVellumValueRequest.Raw
        | NumberVellumValueRequest.Raw
        | JsonVellumValueRequest.Raw
        | ImageVellumValueRequest.Raw
        | FunctionCallVellumValueRequest.Raw
        | ErrorVellumValueRequest.Raw
        | serializers.ArrayVellumValueRequest.Raw
        | ChatHistoryVellumValueRequest.Raw
        | SearchResultsVellumValueRequest.Raw;
}