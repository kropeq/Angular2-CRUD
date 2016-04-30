import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {LoginComponent} from './login.component';

@Component({
	selector: 'my-app',
	template: `
		<div id="content">
			<div id="topBar">
				<div id="login" ><a [routerLink]="['Login']">Zaloguj</a></div>
				<div id="register">Rejestracja</div>
				<div id="startList">Lista startowa</div>
			</div>			
  			<router-outlet></router-outlet>
  			
		</div>`,
	directives: [
		ROUTER_DIRECTIVES,
		LoginComponent
	],
	providers: [
		ROUTER_PROVIDERS
	]
})

@RouteConfig([
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  }
])

export class AppComponent { }