import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { MichaelToddsComponentComponent } from './michael-todds-component/michael-todds-component.component';

@NgModule({
	declarations:
		[
			AppComponent,
			ProductsComponent,
			MichaelToddsComponentComponent
		],
	imports:
		[
			BrowserModule
		],
	providers: [],
	bootstrap:
		[
			AppComponent
		]
})
export class AppModule {}
