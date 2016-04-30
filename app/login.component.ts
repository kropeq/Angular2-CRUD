import {Component} from 'angular2/core';
import {UserService} from './user.service';

@Component({
	selector: 'log-in',
	template: `
		<label id="label1"> Wpisz login </label>
		<input #box (keyup)="login=box.value">
		<label> Wpisz hasło </label>
		<input #box2 (keyup)="password=box2.value">
		<button (click)="onClickMe()">Zaloguj</button>
	`,
	providers: [UserService]
})

export class LoginComponent { 
	login='';
	password='';
	users;

	onClickMe(){
		var jest = false;
		var inputs = {"username":this.login, "password":this.password};
		// sprawdzanie czy jest w liscie uzytkownikow
		// jesli nie, to go dodaje
		users.forEach(function(element) {
			if(element.username === inputs.username && 
				element.password === inputs.password) jest = true;
			alert(element.username);
		})
		if(jest !== true && inputs.username !== ""){
			users.push({"username":this.login,"password":this.password});
			alert("USER DODANY!");
		} else {
			alert("ZALOGOWANO!");
		}
	}

	/*constructor(userService: UserService){
		this.users = userService.getUsers();
	}*/
}

export class User {
	username: string;
	password: string;
}

var users: User[] = [
	{ "username": "admin", "password": "admin2"}
];