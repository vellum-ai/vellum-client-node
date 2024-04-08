// https://registry.terraform.io/providers/vellum-ai/vellum/0.0.2/docs/data-sources/document_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVellumDocumentIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Document Index's ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.2/docs/data-sources/document_index#id DataVellumDocumentIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A name that uniquely identifies this index within its workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.2/docs/data-sources/document_index#name DataVellumDocumentIndex#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.2/docs/data-sources/document_index vellum_document_index}
*/
export class DataVellumDocumentIndex extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vellum_document_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVellumDocumentIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVellumDocumentIndex to import
  * @param importFromId The id of the existing DataVellumDocumentIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.2/docs/data-sources/document_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVellumDocumentIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vellum_document_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.2/docs/data-sources/document_index vellum_document_index} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVellumDocumentIndexConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVellumDocumentIndexConfig = {}) {
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
