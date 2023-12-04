/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ExecutePromptStreamingResponse: core.serialization.Schema<
    serializers.ExecutePromptStreamingResponse.Raw,
    Vellum.ExecutePromptStreamingResponse
> = core.serialization
    .union("state", {
        INITIATED: core.serialization.lazyObject(
            async () => (await import("..")).InitiatedExecutePromptStreamingResponse
        ),
        STREAMING: core.serialization.lazyObject(
            async () => (await import("..")).StreamingExecutePromptStreamingResponse
        ),
        FULFILLED: core.serialization.lazyObject(
            async () => (await import("..")).FulfilledExecutePromptStreamingResponse
        ),
        REJECTED: core.serialization.lazyObject(
            async () => (await import("..")).RejectedExecutePromptStreamingResponse
        ),
    })
    .transform<Vellum.ExecutePromptStreamingResponse>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ExecutePromptStreamingResponse {
    type Raw =
        | ExecutePromptStreamingResponse.Initiated
        | ExecutePromptStreamingResponse.Streaming
        | ExecutePromptStreamingResponse.Fulfilled
        | ExecutePromptStreamingResponse.Rejected;

    interface Initiated extends serializers.InitiatedExecutePromptStreamingResponse.Raw {
        state: "INITIATED";
    }

    interface Streaming extends serializers.StreamingExecutePromptStreamingResponse.Raw {
        state: "STREAMING";
    }

    interface Fulfilled extends serializers.FulfilledExecutePromptStreamingResponse.Raw {
        state: "FULFILLED";
    }

    interface Rejected extends serializers.RejectedExecutePromptStreamingResponse.Raw {
        state: "REJECTED";
    }
}
