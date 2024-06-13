/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface TestSuiteRunRead {
    id: string;
    created: Date;
    testSuite: Vellum.TestSuiteRunTestSuite;
    /**
     * The current state of this run
     *
     * - `QUEUED` - Queued
     * - `RUNNING` - Running
     * - `COMPLETE` - Complete
     * - `FAILED` - Failed
     * - `CANCELLED` - Cancelled
     */
    state: Vellum.TestSuiteRunState;
    /** Configuration that defines how the Test Suite should be run */
    execConfig?: Vellum.TestSuiteRunExecConfig;
}
