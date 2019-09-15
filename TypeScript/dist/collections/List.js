"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class List {
    constructor(listParam) {
        this.listParam = listParam;
        this.list = listParam || new Array();
    }
    get list() { return this._list; }
    set list(value) { this._list = value; }
    add(elem) {
        this._list.push(elem);
    }
    foreach(Action) {
        this.list.forEach(element => {
            Action(element);
        });
    }
}
exports.default = List;
