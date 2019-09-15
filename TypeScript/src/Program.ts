import * as Functions from "./functions/Functions";
import IList from "./collections/IList";
import List  from "./collections/List";

export default class Program {

    protected _message: string;
    get message(): string { return this._message; }
    set message(value: string) { this._message = value; }

    protected _author?: string;
    get author(): string { return this._author; }
    set author(value: string) { this._author = value; }

    protected _version?: number;
    get version(): number { return this._version; }
    set version(value: number) { this._version = value;}

    protected _listMessages: IList<string>;
    get listMessages(): IList<string> { return this._listMessages;}
    set listMessages(value: IList<string>) { this._listMessages = value; }

    constructor({ authorParam, versionParam, message, listMessages} :
                { versionParam?: number;
                  authorParam?: string;
                  message?: string;
                  listMessages?: IList<string>
                } = {}
    ) {
        this.author       = authorParam;
        this.version      = versionParam;
        this.listMessages = listMessages || new List<string>();
        this.message      = message;
    }

    main() {
        console.log(this.message);

        this.listMessages.add("teste 1");
        this.listMessages.add("teste 2");
        this.listMessages.add("teste 3");
        this.listMessages.add("teste 4");

        this.listMessages.foreach((c) => {
            console.log(c)
        });

        console.log(Functions.exibirTexto("Hi modafoquer"));
        console.log(Functions.exibirData())
    }
}