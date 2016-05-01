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
		
		// przeszukanie listy userów w celu określenia,
		// czy istnieje już taki user, a jeśli tak, to można logować
		users.forEach(function(element) {
			if(element.username === inputs.username && 
				element.password === inputs.password) jest = true;
		})
		// jeśli nie ma takiego użytkownika i użytkownik != od pustego
		if(jest !== true && inputs.username !== ""){
			alert("Wpisano niepoprawne dane!");
		// jeśli jest użytkownik i są wpisane poprawne dane, zaloguj
		} else if (jest === true && inputs.username !== ""){
			alert("ZALOGOWANO!");
			document.cookie = "loggedAs="+inputs.username;
			this.login="";
			this.password="";
			this.router.navigate(['Contestants']);
		// jeśli nie są spełnione powyższe warunki, to znaczy, że
		// nie zostały uzupełnione jakieś pola
		} else {
			alert("Uzupełnij wymagane pola.");
		}
	}
}