import path from "path";
import { ConstructsMaker, TerraformProviderConstraint } from "@cdktf/provider-generator";
import { Language } from "@cdktf/commons";

const workdir = process.argv[2] || path.join(process.cwd(), "src", "terraform");

const constraint = new TerraformProviderConstraint("vellum-ai/vellum");

const constructsMaker = new ConstructsMaker({
    codeMakerOutput: workdir,
    targetLanguage: Language.TYPESCRIPT,
});
constructsMaker.generate([constraint]);
