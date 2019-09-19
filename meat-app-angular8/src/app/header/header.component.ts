import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'mt-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    constructor() { }

    public ngOnInit(): void {
        console.log('header was loaded');
    }
}