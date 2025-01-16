/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { IterationStateEnum } from "./IterationStateEnum";

export const MapNodeResultData: core.serialization.ObjectSchema<
    serializers.MapNodeResultData.Raw,
    Vellum.MapNodeResultData
> = core.serialization.object({
    executionIds: core.serialization.property("execution_ids", core.serialization.list(core.serialization.string())),
    iterationState: core.serialization.property("iteration_state", IterationStateEnum.optional()),
});

export declare namespace MapNodeResultData {
    export interface Raw {
        execution_ids: string[];
        iteration_state?: IterationStateEnum.Raw | null;
    }
}
