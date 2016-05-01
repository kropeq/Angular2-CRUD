import {Component} from 'angular2/core';
import {User} from '../models/userModel';
import {UserService} from '../services/user.service';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'log-in',
	template: `
	<div id="logging">
		<h1> LOGOWANIE </h1>
		<label id="label1"> {{title}} </label>
		<input #box placeholder="użytkownik" [ngModel]="login" (keyup)="login=box.value">
		<label> Wpisz hasło </label>
		<input #box2 placeholder="hasło" [ngModel]="password" (keyup)="password=box2.value">
		<button (click)="onClickMe()">Zaloguj</button>
	</div>
	`,
	directives: [ROUTER_DIRECTIVES],
	providers: [UserService]
})

export class LoginComponent { 
	title = "Wpisz login";
	login='';
	password='';
	users: User[];
	user: User;

	constructor(private userService: UserService, private router: Router){ }

	getUsers(){
		return this.userService.getUsers();
	}

	onClickMe(){
		var users = this.getUsers();

		var jest = false;
		var inputs = {username:this.login, password: this.password};
		// sprawdzanie czy jest w liscie uzytkownikow
		// jesli nie, to go dodaje
		
		users.forEach(function(element) {
			if(element.username === inputs.username && 
				element.password === inputs.password) jest = true;
		})
		if(jest !== true && inputs.username !== ""){
			alert("Wpisano niepoprawne dane!");
		} else if (jest === true && inputs.username !== ""){
			alert("ZALOGOWANO!");
			document.cookie = "loggedAs="+inputs.username;
			this.login="";
			this.password="";
			this.router.navigate(['Contestants']);
		} else {
			alert("Uzupełnij wymagane pola.");
		}
	}
}