export * as Vellum from "./api";
export { VellumClient } from "./Client";
export { VellumEnvironment, VellumEnvironmentUrls } from "./environments";
export { VellumError, VellumTimeoutError } from "./errors";
export * as serialization from "./serialization";
import { setGlobalDispatcher, Agent } from "undici";

setGlobalDispatcher(
    new Agent({
        connect: { timeout: 10_000 },
        bodyTimeout: 0,
        headersTimeout: 600_000,
    })
);
