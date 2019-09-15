"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Functions = require("./functions/Functions");
const List_1 = require("./collections/List");
class Program {
    constructor({ authorParam, versionParam, message, listMessages } = {}) {
        this.author = authorParam;
        this.version = versionParam;
        this.listMessages = listMessages || new List_1.default();
        this.message = message;
    }
    get message() { return this._message; }
    set message(value) { this._message = value; }
    get author() { return this._author; }
    set author(value) { this._author = value; }
    get version() { return this._version; }
    set version(value) { this._version = value; }
    get listMessages() { return this._listMessages; }
    set listMessages(value) { this._listMessages = value; }
    main() {
        console.log(this.message);
        this.listMessages.add("teste 1");
        this.listMessages.add("teste 2");
        this.listMessages.add("teste 3");
        this.listMessages.add("teste 4");
        this.listMessages.foreach((c) => {
            console.log(c);
        });
        console.log(Functions.exibirTexto("Hi modafoquer"));
        console.log(Functions.exibirData());
    }
}
exports.default = Program;
