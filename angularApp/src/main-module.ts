import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { APP_BASE_HREF } from "@angular/common";
import { Main } from './main.component';

enableProdMode();

@NgModule({
	imports: [
		BrowserModule
	],
	providers: [{ provide: APP_BASE_HREF, useValue: '/app2/' }],
	declarations: [
		Main,
	],
	bootstrap: [Main]
})

export class MainModule {

}
