import {Component,OnInit} from 'angular2/core';
import {Router,RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {UserService} from '../services/user.service';
import {ContestantService} from '../services/contestant.service';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';
import {ContestantsComponent} from './contestants.component';
import {sharedService} from '../services/shared.service';

@Component({
	selector: 'my-app',
	template: `
		<div id="content">
			<div id="topBar">
				<a *ngIf="loggedAs==undefined" (click)=isUnrecognized()><div>Zaloguj</div></a>
				<a *ngIf="loggedAs" (click)=logOut()><div>Wyloguj {{loggedAs}} </div></a>
				<a [routerLink]="['Register']"><div>Rejestracja</div></a>
				<a (click)="isAdmin()"><div>Lista startowa</div></a>
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
		ContestantService,
		sharedService
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

export class AppComponent implements OnInit { 
	// później to wykorzystam do chowania zakładek
	loggedAs: string;

	constructor(private router: Router, private ss:sharedService){
		this.ss = ss;
	}

	isAdmin(){
		this.loggedAs = document.cookie.split("=")[1];

		if(this.loggedAs != undefined){
			this.router.navigate(['Contestants']);
			
		} else {
			alert("Musisz się zalogować");
		}
	}

	isUnrecognized(){
		if(this.loggedAs == undefined){
			this.router.navigate(['Login']);
		} 
	}

	logOut(){
		document.cookie = "loggedAs=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
		this.loggedAs = undefined;
		this.router.navigate(['Login']);
	}

	ngOnInit(){
		this.ss.getEmittedValue().subscribe(item => this.loggedAs=item);
	}
}