/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { InitiatedExecutePromptEvent } from "./InitiatedExecutePromptEvent";
import { StreamingExecutePromptEvent } from "./StreamingExecutePromptEvent";
import { FulfilledExecutePromptEvent } from "./FulfilledExecutePromptEvent";
import { RejectedExecutePromptEvent } from "./RejectedExecutePromptEvent";

export const ExecutePromptEvent: core.serialization.Schema<
    serializers.ExecutePromptEvent.Raw,
    Vellum.ExecutePromptEvent
> = core.serialization
    .union("state", {
        INITIATED: InitiatedExecutePromptEvent,
        STREAMING: StreamingExecutePromptEvent,
        FULFILLED: FulfilledExecutePromptEvent,
        REJECTED: RejectedExecutePromptEvent,
    })
    .transform<Vellum.ExecutePromptEvent>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ExecutePromptEvent {
    type Raw =
        | ExecutePromptEvent.Initiated
        | ExecutePromptEvent.Streaming
        | ExecutePromptEvent.Fulfilled
        | ExecutePromptEvent.Rejected;

    interface Initiated extends InitiatedExecutePromptEvent.Raw {
        state: "INITIATED";
    }

    interface Streaming extends StreamingExecutePromptEvent.Raw {
        state: "STREAMING";
    }

    interface Fulfilled extends FulfilledExecutePromptEvent.Raw {
        state: "FULFILLED";
    }

    interface Rejected extends RejectedExecutePromptEvent.Raw {
        state: "REJECTED";
    }
}
