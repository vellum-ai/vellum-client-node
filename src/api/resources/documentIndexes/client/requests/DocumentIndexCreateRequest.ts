/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../../index";

/**
 * @example
 *     {
 *         label: "My Document Index",
 *         name: "my-document-index",
 *         indexingConfig: {
 *             vectorizer: {
 *                 modelName: "hkunlp/instructor-xl",
 *                 config: {
 *                     instructionDomain: "",
 *                     instructionQueryTextType: "plain_text",
 *                     instructionDocumentTextType: "plain_text"
 *                 }
 *             },
 *             chunking: {
 *                 chunkerName: "sentence-chunker",
 *                 chunkerConfig: {
 *                     characterLimit: 1000,
 *                     minOverlapRatio: 0.5
 *                 }
 *             }
 *         }
 *     }
 *
 * @example
 *     {
 *         label: "My Document Index",
 *         name: "my-document-index",
 *         indexingConfig: {
 *             vectorizer: {
 *                 modelName: "sentence-transformers/multi-qa-mpnet-base-dot-v1",
 *                 config: {
 *                     "key": "value"
 *                 }
 *             },
 *             chunking: {
 *                 chunkerName: "sentence-chunker",
 *                 chunkerConfig: {
 *                     characterLimit: 1000,
 *                     minOverlapRatio: 0.5
 *                 }
 *             }
 *         }
 *     }
 *
 * @example
 *     {
 *         label: "My Document Index",
 *         name: "my-document-index",
 *         indexingConfig: {
 *             vectorizer: {
 *                 config: {
 *                     addOpenaiApiKey: true
 *                 },
 *                 modelName: "text-embedding-ada-002"
 *             },
 *             chunking: {
 *                 chunkerName: "sentence-chunker",
 *                 chunkerConfig: {
 *                     characterLimit: 1000,
 *                     minOverlapRatio: 0.5
 *                 }
 *             }
 *         }
 *     }
 */
export interface DocumentIndexCreateRequest {
    /** A human-readable label for the document index */
    label: string;
    /** A name that uniquely identifies this index within its workspace */
    name: string;
    /**
     * The current status of the document index
     *
     * * `ACTIVE` - Active
     * * `ARCHIVED` - Archived
     */
    status?: Vellum.EntityStatus;
    indexingConfig: Vellum.DocumentIndexIndexingConfigRequest;
    /** Optionally specify the id of a document index from which you'd like to copy and re-index its documents into this newly created index */
    copyDocumentsFromIndexId?: string;
}
