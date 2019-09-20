import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'mt-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    private _date: string;

    public get date(): string {
        return this._date;
    }

    public set date(value: string) {
        this._date = value;
    }

    constructor() {
        const date: number = (new Date()).getFullYear();

        this.date = date.toString();
    }

    public ngOnInit(): void {
        console.log('footer was loaded');
    }

}
