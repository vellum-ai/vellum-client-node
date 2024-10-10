/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A user input representing a Vellum Error value
 */
export interface ErrorInputRequest {
    /** The variable's name */
    name: string;
    type: "ERROR";
    value: Vellum.VellumErrorRequest;
}