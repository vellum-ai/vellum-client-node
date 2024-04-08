// https://registry.terraform.io/providers/vellum-ai/vellum/0.0.2/docs/resources/document_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DocumentIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * The environment this document index is used in
  * 
  * * `DEVELOPMENT` - Development
  * * `STAGING` - Staging
  * * `PRODUCTION` - Production
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.2/docs/resources/document_index#environment DocumentIndex#environment}
  */
  readonly environment?: string;
  /**
  * A human-readable label for the document index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.2/docs/resources/document_index#label DocumentIndex#label}
  */
  readonly label: string;
  /**
  * A name that uniquely identifies this index within its workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.2/docs/resources/document_index#name DocumentIndex#name}
  */
  readonly name: string;
  /**
  * The current status of the document index
  * 
  * * `ACTIVE` - Active
  * * `ARCHIVED` - Archived
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.2/docs/resources/document_index#status DocumentIndex#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.2/docs/resources/document_index vellum_document_index}
*/
export class DocumentIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vellum_document_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DocumentIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DocumentIndex to import
  * @param importFromId The id of the existing DocumentIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.2/docs/resources/document_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DocumentIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vellum_document_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.2/docs/resources/document_index vellum_document_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DocumentIndexConfig
  */
  public constructor(scope: Construct, id: string, config: DocumentIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'vellum_document_index',
      terraformGeneratorMetadata: {
        providerName: 'vellum',
        providerVersion: '0.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environment = config.environment;
    this._label = config.label;
    this._name = config.name;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.stringToTerraform(this._environment),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
