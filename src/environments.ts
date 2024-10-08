/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface VellumEnvironmentUrls {
    default: string;
    documents: string;
    predict: string;
}

export const VellumEnvironment = {
    Production: {
        default: "https://api.vellum.ai",
        documents: "https://documents.vellum.ai",
        predict: "https://predict.vellum.ai",
    },
} as const;

export type VellumEnvironment = typeof VellumEnvironment.Production;
