/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace RegisteredPrompts {
    interface Options {
        environment?: core.Supplier<environments.VellumEnvironment | environments.VellumEnvironmentUrls>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class RegisteredPrompts {
    constructor(protected readonly _options: RegisteredPrompts.Options) {}

    /**
     * Registers a prompt within Vellum and creates associated Vellum entities. Intended to be used by integration
     * partners, not directly by Vellum users.
     *
     * Under the hood, this endpoint creates a new sandbox, a new model version, and a new deployment.
     * @throws {@link Vellum.BadRequestError}
     * @throws {@link Vellum.NotFoundError}
     * @throws {@link Vellum.ConflictError}
     *
     * @example
     *     await vellum.registeredPrompts.registerPrompt({
     *         label: "label",
     *         name: "name",
     *         prompt: {
     *             promptBlockData: {
     *                 version: 1,
     *                 blocks: [{
     *                         id: "id",
     *                         blockType: Vellum.BlockTypeEnum.ChatMessage,
     *                         properties: {}
     *                     }]
     *             },
     *             inputVariables: [{
     *                     key: "key"
     *                 }]
     *         },
     *         model: "model",
     *         parameters: {
     *             temperature: 1.1,
     *             maxTokens: 1,
     *             topP: 1.1,
     *             frequencyPenalty: 1.1,
     *             presencePenalty: 1.1
     *         }
     *     })
     */
    public async registerPrompt(
        request: Vellum.RegisterPromptRequestRequest,
        requestOptions?: RegisteredPrompts.RequestOptions
    ): Promise<Vellum.RegisterPromptResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                "v1/registered-prompts/register"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.3.19",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: await serializers.RegisterPromptRequestRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.RegisterPromptResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Vellum.BadRequestError(_response.error.body);
                case 404:
                    throw new Vellum.NotFoundError(_response.error.body);
                case 409:
                    throw new Vellum.ConflictError(
                        await serializers.RegisterPromptErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.VellumError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { X_API_KEY: apiKeyValue };
    }
}
