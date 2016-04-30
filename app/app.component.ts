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



/*	title = 'Tour of Heroes';
	public heroes = HEROES;
	selectedHero: Hero;
	onSelect(hero: Hero) { this.selectedHero = hero; }


export class Hero {
  id: number;
  name: string;
}

var HEROES: Hero[] = [
	{ "id": 11, "name": "Mr. Nice" },
	{ "id": 12, "name": "Narco" },
	{ "id": 13, "name": "Bombasto" },
	{ "id": 14, "name": "Celeritas" },
	{ "id": 15, "name": "Magneta" },
	{ "id": 16, "name": "RubberMan" },
	{ "id": 17, "name": "Dynama" },
	{ "id": 18, "name": "Dr IQ" },
	{ "id": 19, "name": "Magma" },
	{ "id": 20, "name": "Tornado" }
];
*/

