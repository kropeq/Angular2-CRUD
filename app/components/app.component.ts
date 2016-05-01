import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {UserService} from '../services/user.service';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';
import {ContestantsComponent} from './contestants.component';

@Component({
	selector: 'my-app',
	template: `
		<div id="content">
			<div id="topBar">
				<a [routerLink]="['Login']"><div>Zaloguj</div></a>
				<a [routerLink]="['Register']"><div>Rejestracja</div></a>
				<a [routerLink]="['Contestants']"><div>Lista startowa</div></a>
			</div>			
  			<router-outlet></router-outlet>
		</div>`,
	directives: [
		ROUTER_DIRECTIVES,
		LoginComponent,
		RegisterComponent,
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
    path: '/register',
    name: 'Register',
    component: RegisterComponent
  },
  {
    path: '/contestants',
    name: 'Contestants',
    component: ContestantsComponent
  }
])

export class AppComponent { 
	// później to wykorzystam do chowania zakładek
	loggedAs = document.cookie.split("=")[1];
}