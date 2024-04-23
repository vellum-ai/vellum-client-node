/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { JinjaPromptTemplateBlockRequest } from "./JinjaPromptTemplateBlockRequest";
import { ChatHistoryPromptTemplateBlockRequest } from "./ChatHistoryPromptTemplateBlockRequest";
import { FunctionDefinitionPromptTemplateBlockRequest } from "./FunctionDefinitionPromptTemplateBlockRequest";

export const PromptTemplateBlockRequest: core.serialization.Schema<
    serializers.PromptTemplateBlockRequest.Raw,
    Vellum.PromptTemplateBlockRequest
> = core.serialization
    .union(core.serialization.discriminant("blockType", "block_type"), {
        JINJA: JinjaPromptTemplateBlockRequest,
        CHAT_HISTORY: ChatHistoryPromptTemplateBlockRequest,
        CHAT_MESSAGE: core.serialization.lazyObject(
            async () => (await import("..")).ChatMessagePromptTemplateBlockRequest
        ),
        FUNCTION_DEFINITION: FunctionDefinitionPromptTemplateBlockRequest,
    })
    .transform<Vellum.PromptTemplateBlockRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace PromptTemplateBlockRequest {
    type Raw =
        | PromptTemplateBlockRequest.Jinja
        | PromptTemplateBlockRequest.ChatHistory
        | PromptTemplateBlockRequest.ChatMessage
        | PromptTemplateBlockRequest.FunctionDefinition;

    interface Jinja extends JinjaPromptTemplateBlockRequest.Raw {
        block_type: "JINJA";
    }

    interface ChatHistory extends ChatHistoryPromptTemplateBlockRequest.Raw {
        block_type: "CHAT_HISTORY";
    }

    interface ChatMessage extends serializers.ChatMessagePromptTemplateBlockRequest.Raw {
        block_type: "CHAT_MESSAGE";
    }

    interface FunctionDefinition extends FunctionDefinitionPromptTemplateBlockRequest.Raw {
        block_type: "FUNCTION_DEFINITION";
    }
}
