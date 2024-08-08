// https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VellumProviderConfig {
  /**
  * API Key to authenticate with the Vellum API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs#api_key VellumProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Base URL to use with the Vellum API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs#base_url VellumProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs#alias VellumProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs vellum}
*/
export class VellumProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vellum";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VellumProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VellumProvider to import
  * @param importFromId The id of the existing VellumProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VellumProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vellum", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs vellum} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VellumProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VellumProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vellum',
      terraformGeneratorMetadata: {
        providerName: 'vellum',
        providerVersion: '0.0.7'
      },
      terraformProviderSource: 'vellum-ai/vellum'
    });
    this._apiKey = config.apiKey;
    this._baseUrl = config.baseUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
