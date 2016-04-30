import {Component} from 'angular2/core';

import {TopBarComponent} from './topbar.component';
import {LoginComponent} from './login.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	directives: [
		TopBarComponent,
		LoginComponent
	]
})

export class AppComponent { }