// https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/resources/ml_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MlModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The organization that developed the ML Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/resources/ml_model#developed_by MlModel#developed_by}
  */
  readonly developedBy: string;
  /**
  * The execution configuration of the ML Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/resources/ml_model#exec_config MlModel#exec_config}
  */
  readonly execConfig: MlModelExecConfig;
  /**
  * The family of the ML Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/resources/ml_model#family MlModel#family}
  */
  readonly family: string;
  /**
  * The organization hosting the ML Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/resources/ml_model#hosted_by MlModel#hosted_by}
  */
  readonly hostedBy: string;
  /**
  * A name that uniquely identifies this ML Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/resources/ml_model#name MlModel#name}
  */
  readonly name: string;
  /**
  * The visibility of the ML Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/resources/ml_model#visibility MlModel#visibility}
  */
  readonly visibility: string;
}
export interface MlModelExecConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/resources/ml_model#base_url MlModel#base_url}
  */
  readonly baseUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/resources/ml_model#features MlModel#features}
  */
  readonly features: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/resources/ml_model#metadata MlModel#metadata}
  */
  readonly metadata: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/resources/ml_model#model_identifier MlModel#model_identifier}
  */
  readonly modelIdentifier: string;
}

export function mlModelExecConfigToTerraform(struct?: MlModelExecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.features),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    model_identifier: cdktf.stringToTerraform(struct!.modelIdentifier),
  }
}


export function mlModelExecConfigToHclTerraform(struct?: MlModelExecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.features),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    model_identifier: {
      value: cdktf.stringToHclTerraform(struct!.modelIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MlModelExecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MlModelExecConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._features !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._modelIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelIdentifier = this._modelIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlModelExecConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
      this._features = undefined;
      this._metadata = undefined;
      this._modelIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
      this._features = value.features;
      this._metadata = value.metadata;
      this._modelIdentifier = value.modelIdentifier;
    }
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // features - computed: false, optional: false, required: true
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // model_identifier - computed: false, optional: false, required: true
  private _modelIdentifier?: string; 
  public get modelIdentifier() {
    return this.getStringAttribute('model_identifier');
  }
  public set modelIdentifier(value: string) {
    this._modelIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdentifierInput() {
    return this._modelIdentifier;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/resources/ml_model vellum_ml_model}
*/
export class MlModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vellum_ml_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MlModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MlModel to import
  * @param importFromId The id of the existing MlModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/resources/ml_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MlModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vellum_ml_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vellum-ai/vellum/0.0.7/docs/resources/ml_model vellum_ml_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MlModelConfig
  */
  public constructor(scope: Construct, id: string, config: MlModelConfig) {
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
    this._developedBy = config.developedBy;
    this._execConfig.internalValue = config.execConfig;
    this._family = config.family;
    this._hostedBy = config.hostedBy;
    this._name = config.name;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // developed_by - computed: false, optional: false, required: true
  private _developedBy?: string; 
  public get developedBy() {
    return this.getStringAttribute('developed_by');
  }
  public set developedBy(value: string) {
    this._developedBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get developedByInput() {
    return this._developedBy;
  }

  // exec_config - computed: false, optional: false, required: true
  private _execConfig = new MlModelExecConfigOutputReference(this, "exec_config");
  public get execConfig() {
    return this._execConfig;
  }
  public putExecConfig(value: MlModelExecConfig) {
    this._execConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get execConfigInput() {
    return this._execConfig.internalValue;
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // hosted_by - computed: false, optional: false, required: true
  private _hostedBy?: string; 
  public get hostedBy() {
    return this.getStringAttribute('hosted_by');
  }
  public set hostedBy(value: string) {
    this._hostedBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedByInput() {
    return this._hostedBy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // visibility - computed: false, optional: false, required: true
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      developed_by: cdktf.stringToTerraform(this._developedBy),
      exec_config: mlModelExecConfigToTerraform(this._execConfig.internalValue),
      family: cdktf.stringToTerraform(this._family),
      hosted_by: cdktf.stringToTerraform(this._hostedBy),
      name: cdktf.stringToTerraform(this._name),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      developed_by: {
        value: cdktf.stringToHclTerraform(this._developedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exec_config: {
        value: mlModelExecConfigToHclTerraform(this._execConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MlModelExecConfig",
      },
      family: {
        value: cdktf.stringToHclTerraform(this._family),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosted_by: {
        value: cdktf.stringToHclTerraform(this._hostedBy),
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
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
