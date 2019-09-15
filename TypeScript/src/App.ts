import * as env from "./environment/env"
import Program from "./Program";

let program = new Program({
    authorParam:  env.Author,
    versionParam: env.Version,
    message: "eh noix no Typescript porrar"
});
program.main();