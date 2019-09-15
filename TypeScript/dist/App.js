"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = require("./environment/env");
const Program_1 = require("./Program");
let program = new Program_1.default({
    authorParam: env.Author,
    versionParam: env.Version,
    message: "eh noix no Typescript porrar"
});
program.main();
