import {
	NgModule,
	CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './chartiq-hello-world/hello-world.component';
import { RouteListComponent } from './route-list/route-list.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';

@NgModule({
	declarations: [
		AppComponent,
		HelloWorldComponent,
		RouteListComponent,
		FooterComponent,
		TestComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{ path: '', component: RouteListComponent },
			{ path: 'list', component: RouteListComponent },
			{ path: 'hello-world', component: HelloWorldComponent },
			{ path: 'test', component: TestComponent },
			{
				path: '',
				loadChildren: () => import("./chartiq/chartiq.module")
					.then(m => m.ChartiqModule)
			},
			// Uncomment following lines if Active Trader module is available
      // {
			// 	path: 'active-trader',
			// 	loadChildren: () => import("./active-trader-workstation/active-trader-workstation.module")
			// 	.then(m => m.CryptoIQWorkstationModule)
			// },
			{
				path: 'custom-chart',
				loadChildren: () => import("./custom-chartiq/custom-chartiq.module")
					.then(m => m.ChartiqModule)
			},
    ])],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	bootstrap: [AppComponent],
})
export class AppModule {}
