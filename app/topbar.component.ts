import {Component} from 'angular2/core';

@Component({
	selector: 'top-bar',
	template: `
	<div id="bar">
		<div id="login">Zaloguj</div>
		<div id="register">Rejestracja</div>
		<div id="startList">Lista startowa</div>
	</div>
	`
})

export class TopBarComponent { }