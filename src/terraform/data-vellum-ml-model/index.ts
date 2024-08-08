// https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/data-sources/ml_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVellumMlModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ML Model's ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/data-sources/ml_model#id DataVellumMlModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A name that uniquely identifies this ML Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/data-sources/ml_model#name DataVellumMlModel#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/data-sources/ml_model vellum_ml_model}
*/
export class DataVellumMlModel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vellum_ml_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVellumMlModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVellumMlModel to import
  * @param importFromId The id of the existing DataVellumMlModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/data-sources/ml_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVellumMlModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vellum_ml_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/data-sources/ml_model vellum_ml_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVellumMlModelConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVellumMlModelConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vellum_ml_model',
      terraformGeneratorMetadata: {
        providerName: 'vellum',
        providerVersion: '0.0.7'
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

  // developed_by - computed: true, optional: false, required: false
  public get developedBy() {
    return this.getStringAttribute('developed_by');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // hosted_by - computed: true, optional: false, required: false
  public get hostedBy() {
    return this.getStringAttribute('hosted_by');
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
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
