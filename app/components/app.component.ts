import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {UserService} from '../services/user.service';
import {LoginComponent} from './login.component';
import {ContestantsComponent} from './contestants.component';

@Component({
	selector: 'my-app',
	template: `
		<div id="content">
			<div id="topBar">
				<div id="login" ><a [routerLink]="['Login']">Zaloguj</a></div>
				<div id="register">Rejestracja</div>
				<div id="startList"><a [routerLink]="['Contestants']">Lista startowa</a></div>
			</div>			
  			<router-outlet></router-outlet>
		</div>`,
	directives: [
		ROUTER_DIRECTIVES,
		LoginComponent,
		ContestantsComponent
	],
	providers: [
		ROUTER_PROVIDERS,
		UserService
	]
})

@RouteConfig([
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
    useAsDefault: true
  },
  {
    path: '/contestants',
    name: 'Contestants',
    component: ContestantsComponent
  }
])

export class AppComponent { }