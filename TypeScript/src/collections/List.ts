import IList from "./IList"

export default class List<T> implements IList<T> {

    protected _list:Array<T>;
    get list(): Array<T> { return this._list; }
    set list(value: Array<T>) { this._list = value; }

    constructor(private listParam?:Array<T>) {

        this.list = listParam || new Array<T>();
    }

    add(elem: T): void {
        this._list.push(elem)
    }

    foreach(Action: (elem: T) => void): void {
        this.list.forEach(element => {
            Action(element)
        });
    }
}