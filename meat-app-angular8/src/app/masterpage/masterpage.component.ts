import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'mt-masterpage',
    templateUrl: './masterpage.component.html'
})

export class MasterpageComponent implements OnInit {
    private _title: string;

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    constructor() {
        this.title = 'hello world';
    }

    public ngOnInit(): void {
        console.log('masterPage was loaded');
    }
}
