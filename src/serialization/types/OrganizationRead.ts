/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { NewMemberJoinBehaviorEnum } from "./NewMemberJoinBehaviorEnum";

export const OrganizationRead: core.serialization.ObjectSchema<
    serializers.OrganizationRead.Raw,
    Vellum.OrganizationRead
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    allowStaffAccess: core.serialization.property("allow_staff_access", core.serialization.boolean().optional()),
    newMemberJoinBehavior: core.serialization.property("new_member_join_behavior", NewMemberJoinBehaviorEnum),
    limitConfig: core.serialization.property(
        "limit_config",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
});

export declare namespace OrganizationRead {
    export interface Raw {
        id: string;
        name: string;
        allow_staff_access?: boolean | null;
        new_member_join_behavior: NewMemberJoinBehaviorEnum.Raw;
        limit_config?: Record<string, unknown> | null;
    }
}
