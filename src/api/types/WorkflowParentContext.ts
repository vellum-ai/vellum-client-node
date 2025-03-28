/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface WorkflowParentContext {
    parent?: Vellum.ParentContext;
    links?: Vellum.SpanLink[];
    workflowDefinition: Vellum.VellumCodeResourceDefinition;
    type: "WORKFLOW";
    spanId: string;
}
