import { RouterConfig, provideRouter } from '@angular/router';

import { CarTableComponent } from './cars/car-table/car-table.component';
import { CarFormComponent } from './cars/car-form/car-form.component';

const routes: RouterConfig = [
	{ path: '', component: CarTableComponent },
	{ path: 'create', component: CarFormComponent },
];

export const APP_ROUTER_PROVIDERS = [ provideRouter(routes) ]; 