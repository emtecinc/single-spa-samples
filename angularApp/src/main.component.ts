import { Component } from '@angular/core';
import * as angularImg from "../assets/angular-logo.png";

@Component({
    selector: 'appMain',
    template: `
		<div style="margin-top: 100px;">
            <div style="margin: auto;width: 20%;"><img [src]="angularImg" style="width: 100px;"/></div>
            <br />
			<h1>This was rendered by App2 which is written in Angular 6</h1>
		</div>
	`,
})

export class Main {
    angularImg: any;
    constructor() {
        this.angularImg = angularImg;
    }
}
